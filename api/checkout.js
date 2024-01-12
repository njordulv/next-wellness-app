const express = require('express')
const fs = require('fs').promises
const router = express.Router()

const filePath = 'data/checkout.json'

router.post('/', async (req, res) => {
  try {
    const { checkoutData } = req.body
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

    let checkoutArray
    try {
      checkoutArray = JSON.parse(data)
    } catch (jsonError) {
      console.error('Error parsing JSON:', jsonError)
      checkoutArray = []
    }

    checkoutArray.push(checkoutData)

    await fs.writeFile(filePath, JSON.stringify(checkoutArray, null, 2), 'utf8')

    res.status(200).send('Form submitted successfully!')
  } catch (err) {
    console.error(err)
    res.status(500).send('Error submitting form')
  }
})

module.exports = router
