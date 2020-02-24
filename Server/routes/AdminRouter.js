let express = require("express");
const mongoose = require("mongoose");
 let adminRouter = express.Router();
     multer = require('multer')

    require("../Models/schoolNew")
 let schoolNewsShema =  mongoose.model("schoolLatestNews");

 

// Multer File upload settings
const DIR = './public/upload/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname
    cb(null, fileName)
  }
});

// Multer Mime Type Validation
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
}

)
;








 /************* Add Role for Employeee******************** */


 adminRouter.put("/addRole",(request,response)=>{
     employeeSchema.update({nationalId:request.bosy.nationalId},{
         $set:{
             role:request.body.role
         }
     }).then((allTeachers)=>{
         response.send(allTeachers)

     })
 })

 



/***********  School News  ****************** */

adminRouter.post("/addNews",upload.single('img'),(request,response)=>{
    const url = request.protocol +'://' + request.get('host')
    console.log(request)
    console.log(request.body,'nnnnnn')
       let  news = new schoolNewsShema({
            img: url + '/public/upload/' + request.file.filename,
            title:request.body.title,
            description:request.body.description
       })
      news.save().then((news)=>{
           console.log(news)
         response.send(news)
       }).catch((error )=>{
                   response.send(error)
       })
})
/* ******* get all News ********** */
adminRouter.get("/allSchoolNews",(request,response)=>{
    schoolNewsShema.find({})
            .then((allNews)=>{
                console.log(allNews)
                response.send(allNews)
            })
            .catch((error)=>{
                response.send(error)
            })

})
/* *********** delete  new news ************* */
adminRouter.delete("/deleteNews",(request,response)=>{
    console.log(request.body)
    schoolNewsShema.deleteOne({_id:request.body.id}).then((data)=>{
        response.send(data)
    }).catch((error)=>{
        response.send(error)
    })
})
/**********  الادراه ***************** */

module.exports = adminRouter;
