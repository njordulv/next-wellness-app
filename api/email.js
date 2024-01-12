const express = require('express')
const fs = require('fs')
const router = express.Router()

function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file ${filePath}: ${err}`)
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

function writeFileAsync(filePath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing file ${filePath}: ${err}`)
        reject(err)
      } else {
        resolve()
      }
    })
  })
}
router.post('/', async (req, res) => {
  try {
    const formData = req.body

    // Check if the file exists
    const fileExists = fs.existsSync('data/email.json')

    let emailData

    if (fileExists) {
      // Read and parse existing file content
      const data = await readFileAsync('data/email.json')
      emailData = JSON.parse(data)
    } else {
      console.error('File not found. Creating a new file.')
      emailData = []
    }

    emailData.push(formData)

    await writeFileAsync('data/email.json', JSON.stringify(emailData, null, 2))

    res.status(200).send('Data was saved successfully')
  } catch (err) {
    console.error(err)
    res.status(500).send('Error saving data')
  }
})

module.exports = router
