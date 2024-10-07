const jwt = require('jsonwebtoken')

const users = require("../modal/userModel");

//login
exports.loginController = async(req,res)=>{
    const {username , password} = req.body
     try{
         const existingUser = await users.findOne({username,password})
         if(existingUser){
            //create tokens to handle loged in users and not logedin users.
            const token = jwt.sign({userId:existingUser._id},'supersecretkey')
            //more data send only by array
            res.status(200).json({existingUser,token})
        }
        else{
            res.status(406).json('invalid username or password')
        }
     }catch(error){
        res.status(401).json(error)
     }
}

