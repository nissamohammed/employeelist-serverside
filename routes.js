//path setting ('/')-  use seperate file, so we use this file

//1) import express
const express = require('express')

//import usercontroller file
const userController =require('./controller/userController')
//import employeecontroller
const employeeController = require('./controller/employeeController')
 
//jwtmiddlwware
const jwt = require('./middleware/jwtMiddleware')
//multer
const multerConfig = require('./middleware/multerMiddleware')


//2) create an object for router class
const router = new express.Router()




//3) set up path for each request from view

//front end functions request:

//userController file logic is here
//login
router.post('/login',userController.loginController)

//addemployee
router.post('/addemployee',jwt,multerConfig.single('empimage'),employeeController.addEmployeeController)

//to get allemployee list
router.get('/allemployee',jwt,employeeController.getAllEmployeeController)

//delete
router.delete('/delete/:id',employeeController.deleteEmployeeController)

//edit employee
router.put('/edit-employee/:id',jwt,multerConfig.single('empimage'),employeeController.editEmployeeController)



//4) export the router
module.exports = router