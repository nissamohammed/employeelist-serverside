//multer
//1)import multer
const multer = require('multer')



//store file
const storage = multer.diskStorage({
    //where the file is stored
    destination:(req,file,callback)=>{
    callback(null,'./uploads')//path in which the file is stored
    },
    //by which name the file should be stored
    filename:(req,file,callback)=>{
          const filename = `image-${Date.now()}-${file.originalname}` //how to store in db,in which format ,format of storing the file(file.filname -(front end format)- is enough ,if we to follow a fo)
    //store
    callback(null,filename)//setting the file name
        }
})





//function which file shouid accept or reject
const fileFilter=(req, file, callback)=>{
//logic
if(file.mimetype=='image/png' || file.mimetype=='image/jpg' || file.mimetype=='image/jpeg'){
    callback(null,true)
}else{
    callback(null, false)
    return callback(new Error('only png, jpg, jpeg files are acceptedd'))
}
}



//configuration
const multerConfig = multer({
    storage,
    fileFilter
})

module.exports = multerConfig
//use this multer in routes.js