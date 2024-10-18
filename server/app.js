// This is the main file, that contains all the related files with the server also

const express = require('express')
const dbConnection = require('./config')
const route = require('./routes/userRoute')
const mongoose = require('mongoose')
const cors = require('cors')

// initialize express
const app = express()

// Connection with database
dbConnection()

// Middleware to parse JSON
app.use(express.json())
app.use(cors())

// Routes
app.use('/api', route)

// Define the PORT
const PORT = process.env.PORT || 3000

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on PORT number ${PORT}`)
})
