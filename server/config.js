const mongoose = require('mongoose')

const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/crudApp')
    console.log('MongoDB connected successfully......')
  } catch (err) {
    console.log(err.message)
  }
}

module.exports = dbConnection
