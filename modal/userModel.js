//import
const mangoose = require('mongoose')

//schema
//all input field from front end
const userSchema = new mangoose.Schema({
     username:{
        type:String,
        required:true
     },
     password:{
        type:String,
        required:true
     }
    

})

const users = mangoose.model("users",userSchema)
module.exports = users