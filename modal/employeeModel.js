//import
const mongoose = require('mongoose')


const employeeSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
mobile:{
    type:String,
    required:true
},
designation:{
    type:String,
    required:true
},
gender:{
    type:String,
    required:true
},
course:{
    type:String,
    required:true
},
empimage:{
    type:String,
    required:true
},
createdAt:{
    type:String,
    required:true
},
userId:{
    type:String,
    required:true
}

})



const emplists = mongoose.model("emplists",employeeSchema)
module.exports = emplists