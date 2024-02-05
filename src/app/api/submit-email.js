import fs from 'fs'
import path from 'path'

const readFileAsync = async (filePath) => {
  return fs.promises.readFile(filePath, 'utf8')
}

const writeFileAsync = async (filePath, content) => {
  return fs.promises.writeFile(filePath, content, 'utf8')
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const formData = req.body
      const filePath = path.join(process.cwd(), 'data', 'email.json')
      const fileExists = fs.existsSync(filePath)

      let emailData

      if (fileExists) {
        const data = await readFileAsync(filePath)
        emailData = JSON.parse(data)
      } else {
        console.error('File not found. Creating a new file.')
        emailData = []
      }

      emailData.push(formData)

      await writeFileAsync(filePath, JSON.stringify(emailData, null, 2))

      res.status(200).send('Data was saved successfully')
    } catch (err) {
      console.error(err)
      res.status(500).send('Error saving data')
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
