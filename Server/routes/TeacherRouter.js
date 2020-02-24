let express = require("express");
const mongoose = require("mongoose");
 let router = express.Router();
  require("../models/TeacherSchema");
 let teacherShema =  mongoose.model("Teachers");

router.get('/list',(request,response)=>{
    teacherShema.find({}).then(data=>response.send(data)).catch(err=>{response.send(err)})
})
router.post("/add",(request,response)=>{
 let teacher = new teacherShema({
    fullName:request.body.fullName,
    Address:request.body.address,
    nationalId:request.body.nationalId,
    userName:request.body.userName,
    password:request.body.password,
    phoneNumber:request.body.phoneNumber,
    salary: request.body.salary,
    subjects:{'subjectName':'Math','classesName':'6/1'}//request.body.subjects,
 })

 teacher.save().then((data)=>{
    console.log('ggg')
    response.send(data)
 }).catch((error)=>{
    console.log('h')
 response.send(error)
 })
})
//router.post("/addsubject",(request,response)=>{
    /// get teacher
    router.get("/edit/:id",(request,response)=>{
             teacherShema.findOne({_id:request.params.id}).then((techer)=>{
                   response.send(techer)
             }).catch((error)=>{
                    response.send(error)
             })
    })

// edit teacher data 
router.put("/edit/:id",(request,response)=>{
teacherShema.updateOne({_id:request.body.id},{
    $set:{
        fullName:request.body.fullName,
        Address:request.body.address,
        nationalId:request.body.nationalId,
        userName:request.body.userName,
        password:request.body.password,
        phoneNumber:request.body.phoneNumber,
    }}
    
)
})
// update salary
router.post("/editsalray",(request,response)=>{
                 
           teacherShema.updateOne({_id:request.body.id},{
               $inc:{
                   salary:request.body.salary


               }
           })

})

router.put("/edit/subject",(request,response)=>{
    teacherShema.updateOne({_id:request.body.id},{
        $set:{
            subjects:request.body.subjects,
        } 
    })
})
// delete teacher 
router.delete("techer/:id",(request,response)=>{
teacherShema.deleteOne({_id:request.params.id}).then((data)=>{
    response.send(data)
})
})



 module.exports = router;