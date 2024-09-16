// This file is used to create route/path for user

const express = require('express')
// Following is used for importing all APIs function simultaneously
const userController = require('../controller/userController')

const route = express.Router()

// userController.API's functions used that come from userController file
// ---------------POST---------------
route.post('/create', userController.create)

// ---------------GET----------------
route.get('/getall', userController.getAll)
route.get('/getone/:id', userController.getOne)

// ---------------PUT----------------
route.put('/update/:id', userController.update)

// ---------------DELETE----------------
route.delete('/delete/:id', userController.delete)

module.exports = route
