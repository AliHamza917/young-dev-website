const express = require("express")
const {login , register} = require('../controller/authController')
const authController = express.Router()


authController.route( '/login').post(login)
authController.route('/register' ).post(register)



module.exports =authController;