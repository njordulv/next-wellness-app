import fs from 'fs/promises'
import path from 'path'

const filePath = path.join(process.cwd(), 'data', 'checkout.json')

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { checkoutData } = req.body

      try {
        await fs.mkdir(path.dirname(filePath), { recursive: true })
      } catch (err) {
        if (err.code !== 'EEXIST') {
          throw err
        }
      }

      let data
      try {
        data = await fs.readFile(filePath, 'utf8')
      } catch (readError) {
        if (readError.code === 'ENOENT') {
          console.error('File not found. Creating a new file.')
          await fs.writeFile(filePath, '[]', 'utf8')
          data = '[]'
        } else {
          throw readError
        }
      }

      const checkoutArray = JSON.parse(data)
      checkoutArray.push(checkoutData)
      await fs.writeFile(
        filePath,
        JSON.stringify(checkoutArray, null, 2),
        'utf8'
      )

      res.status(200).json({ message: 'Form submitted successfully!' })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: 'Error submitting form' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
