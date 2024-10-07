const emplists = require('../modal/employeeModel')


exports.addEmployeeController = async(req,res)=>{
console.log('inside addemployeecontroller');
const userId = req.payload
console.log(userId);
//install multter for uploading data in back end.only application in
//after uploaded data then continue here.
//object body and file object
//to see - console.log(req.file); and console.log(req.body);
console.log(req.file);
console.log(req.body);
const {name,email,mobile,designation,gender,course,createdAt} = req.body
const empimage = req.file.filename
//go to productmodel to create schema


try{
    const existingEmployee = await emplists.findOne({email})//please give unique value to identify existing or not
     if(existingEmployee){
        res.status(406).json('This employee is already exist')
     }else{
        //create object for new model
        const newProject = new emplists({
            name,email,mobile,designation,gender,course,createdAt,empimage,userId
        })
        //save in db
        await newProject.save()
        res.status(200).json(newProject)
     }

}catch(error){
    res.status(401).json(error)
}

}



//to get all employee
exports.getAllEmployeeController = async(req,res)=>{
    //to get searched data
    const searchkey = req.query.search
    console.log(searchkey);
    //
    try{
        //
        //to get searched data
        const query = {
        //to remove case sensitivity => $options:'i'
            name:{$regex:searchkey,$options:'i'}
        }
        //
        //to get all employee
        const allemployees = await emplists.find(query)
        if (allemployees) {
            res.status(200).json(allemployees)
        } else {
            res.status(406).json('No employee add yet')
        }

    } catch (error) {
        res.status(401).json(error)
    }
}



//delete
exports.deleteEmployeeController = async(req,res)=>{
    console.log('inside delete function');
     const {id}= req.params
     console.log(id);
     try{
        //deleteOne - returns true or false
        //findByAndDelete - returns an object
           const employeelists = await emplists.findByIdAndDelete({_id:id})
           res.status(200).json(employeelists)
        }catch(error) {
            res.status(401).json(error)
        }
}


//edit employee
exports.editEmployeeController = async(req,res)=>{
    const {id} = req.params
    const userId = req.payload

    const {name,email,mobile,designation,gender,course,empimage} = req.body
    
    const uploadimage = req.file? req.file.filename:empimage

    try {
        const existingemployee = await emplists.findByIdAndUpdate({ _id: id }, {
            name,email,mobile,designation,gender,course, empimage: uploadimage, userId
        })
        await existingemployee.save()
        res.status(200).json(existingemployee)

    } catch (error) {
        res.status(401).json(error)
    }

}

