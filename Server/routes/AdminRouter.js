let express = require("express");
const mongoose = require("mongoose");
 let adminRouter = express.Router();
  require("../models/TeacherSchema")
  require("../models/schoolNew")

 let teacherShema =  mongoose.model("Teachers");
 let schoolNewsShema =  mongoose.model("schoolLatestNews");

 



 adminRouter.put("/allTeachers",(request,response)=>{
     teacherShema.update({},{
         $set:{
             role:"teacher"
         }
     },{
         multi:true
     }).then((allTeachers)=>{
         response.send(allTeachers)

     })
 })
 adminRouter.put("/newTeacher",(request,response)=>{
    teacherShema.updateOne({_id:request.body.id},{
        $set:{
            role:"teacher"
        }
    }).then((data)=>{
        response.send(data)
    })
})
 
 adminRouter.put("/allEmployee",(request,response)=>{
    teacherShema.update({},{
        $set:{
            role:"employee"
        }
    },{
        multi:true
    }).then((data)=>{
        response.send()
    })
})
adminRouter.put("/newEmployee",(request,response)=>{
    teacherShema.updateOne({_id:request.body.id},{
        $set:{
            role:"employee"
        }
    }).then((data)=>{
        response.send(data)
    })
})

adminRouter.put("/allParent",(request,response)=>{
    teacherShema.update({},{
        $set:{
            role:"parent"
        }
    },{
        multi:true
    }).then((data)=>{
        response.send(data)
    })
})

adminRouter.put("/newParent",(request,response)=>{
    teacherShema.updateOne({_id:request.body.id},{
        $set:{
            role:"parent"
        }
    }).then((data)=>{
        response.send(data)
    })
})

adminRouter.put("/allStudent",(request,response)=>{
    teacherShema.update({},{
        $set:{
            role:"student"
        }
    })
})
adminRouter.put("/newStudent",(request,response)=>{
    teacherShema.updateOne({_id:request.body.id},{
        $set:{
            role:"student"
        }
    }).then((data)=>{
        response.send(data)
    })
})



/***********  School News  ****************** */

adminRouter.post("/addNews",(request,response)=>{
    console.log(request.body)
       let news = new schoolNewsShema({
           img:request.body.img,
           description:request.body.description,
           title:request.body.title
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
    schoolNewsShema.find({}).then((allNews)=>{
         console.log(allNews)
           response.send(allNews)
    }).catch((error)=>{
        response.send(error)
    })

})
/* *********** delete  new news ************* */
adminRouter.delete("/deleteNews",(request,response)=>{
    schoolNewsShema.deleteOne({_id:request.body.id}).then((data)=>{
        response.send(data)
    }).catch((error)=>{
        response.send(error)
    })
})
/**********  الادراه ***************** */

//  adminRouter.get("/allmangers",(request,response)=>{

//  })







module.exports = adminRouter;
