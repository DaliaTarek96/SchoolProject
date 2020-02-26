let express = require("express");
let loginRouter = express.Router();
let path = require("path");
let mongoose = require("mongoose");

require("../models/LoginModel");
require("../models/StudentProModel");
require("../models/TeacherSchema");
require("../models/parent");
require("../models/employeeModel");
require('../models/IDsave')

let loginSchema = mongoose.model("LoginSchema");
let studentproSchema = mongoose.model("StudentsPro");
let parentSchema = mongoose.model("parent");
let teacherSchema = mongoose.model("Teachers");
let employeeSch = mongoose.model("employee");
let ID = mongoose.model('ID');

// let User = '';

loginRouter.post("/login", (request, response ) => {
    // console.log(response.send("DONE ...."));

    if (request.body.NationalID == 123456789 && request.body.Password == 123) {
        // console.log("hi am admin");
        // console.log(request.body);
        // User = "Admin";
        request.session.role='admin';
        response.send("admin");
    }

 else if (request.body.user=="Student") {
    //  console.log(request.body);
    studentproSchema.findOne({NationalID:request.body.NationalID,Password:request.body.Password}).
    then(student => {
        request.session.role='student';

     response.send(student);

    }).catch(err => {
        response.send(err)
        //  console.log("not found")
         });

     

 }else if(request.body.user=="Teacher"){
    

     teacherSchema.findOne({NationalID:request.body.NationalID,Password:request.body.Password}).
     then(teacher=>{
        request.session.role='teacher';
         response.send(teacher);
     });
 
 } else if (request.body.user=="Parent"){

    parentSchema.findOne({nationalId:request.body.NationalID,Password:request.body.password}).
    then(parent=>{
        request.session.role='parent';

        response.send(parent);
    })
 }else if(request.body.user=="Control"){
     console.log(request.body)
     employeeSch.findOne({NationalID:request.body.NationalID,Password:request.body.Password,Role:request.body.user}).
     then(empControl=>{
        request.session.role='control';

         response.send(empControl);
     })
     
 }else if(request.body.user=="StudentAffaires"){
    request.session.role='StudentAffaires';
    console.log(request.session.role)
     employeeSch.findOne({NationalID:request.body.NationalID,Password:request.body.Password,Role:request.body.user}).
     then(empStudentAffairs=>{
        
        //  console.log(empStudentAffairs)
         response.send(empStudentAffairs);
     })
 }else if(request.body.user=="EmployeeAffaires"){
     employeeSch.findOne({NationalID:request.body.NationalID,Password:request.body.Password,Role:request.body.user}).
     then(empEmployeeAffaires=>{
        request.session.role='EmployeeAffaires';
         
         response.send(empEmployeeAffaires);
     })
 }

});



module.exports = loginRouter;