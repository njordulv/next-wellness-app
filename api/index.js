const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Import route handlers
const emailHandler = require('./email')
const checkoutHandler = require('./checkout')

// Use the route handlers
app.use('/submit-email', emailHandler)
app.use('/submit-checkout', checkoutHandler)

app.listen(4000, () => {
  console.log('Server running on port 4000')
})
