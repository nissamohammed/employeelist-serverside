//order of the command is important!! please follow this order( becuse : javascript is single thread programming language, line by line execution)

// import dotenv- to load environment variable.
require('dotenv').config()//config()-environment variables to load in process.env

//import express
const express = require('express')

//import cors
const cors = require('cors')

//import router
const router = require('./routes')

//application specefic middleware
//const app= require('./middleware/appMiddleware')

//import coonetion.js
require('./connection')

//create express server
//create an express application .the express() function us a top-level function exported by the express module.
const emplistServer = express()

//use of cors- to communicate with the view.
emplistServer.use(cors())

//use json() method - returns a middleware which can parse json formate.
emplistServer.use(express.json())



//use router
emplistServer.use(router)

//to display static image from server and view in front end
//to export upload folder from the server sid to use in the client side
//first argument should the name in which we are using the folder in the client side
//second arg - static method to export the folder
//static method should have the path of the export folder
emplistServer.use('/uploads',express.static('./uploads'))


//set port for the server
PORT = 4000 || process.env.PORT

//listen to the port - to resolve the request.
emplistServer.listen(PORT,()=>{
    console.log(`server running successsfully at port number : ${PORT}`);
})

