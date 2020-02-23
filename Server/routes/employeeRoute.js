let express = require('express'),
    mongoose = require('mongoose'),
    employeeRoute = express.Router();

// Employee Subject Schema
require('../models/employeeModel');
let employeeSchema = mongoose.model('employee');

employeeRoute.route('/employee')
            .get((request,response)=>{
                employeeSchema.find({})
                        .then((data)=>{
                            response.send(data);
                        })
                        .catch((error)=>{response.send(error)});
            })
            .post((request,response)=>{
              
                let employeeObject =  new  employeeSchema({
                    // _id:request.body._id,
                    FullName:request.body.FullName,
                    NationalID:request.body.NationalID,
                    Password:request.body.Password,
                    Salary:request.body.Salary,
                    Address:request.body.Salary,
                    PhoneNumber:request.body.PhoneNumber,
                    DOB:request.body.DOB,
                    DOJ:request.body.DOJ,
                    Role:''
               });
                employeeObject.save()
                    .then((data)=>{response.send(data);})
                    .catch((error)=>{response.send(error)});
            })
            .put((request,response)=>{
                
                employeeSchema.updateOne({NationalID:request.body.NationalID},{
                        FullName:request.body.FullName,
                        NationalID:request.body.NationalID,
                        Password:request.body.Password,
                        Salary:request.body.Salary,
                        Address:request.body.Salary,
                        PhoneNumber:request.body.PhoneNumber,
                         DOB:request.body.DOB.split('T')[0],
                         DOJ:request.body.DOJ.split('T')[0],
                         Role:request.body.Role
                  }).then(data=>response.send(data)).catch(err=>response.send(err));
            })
            .delete((request,response)=>{
                employeeSchema.deleteOne({_id:request.body._id})
                        .then(data=>response.send(data)).catch(err=>response.send(err));
            });

            employeeRoute.get('/employee/:id',(request,response)=>{
                employeeSchema.findOne({_id:request.params.id})
                        .then((data)=>{
                            response.send(data)
                            // response.render("subject",{ClassSubject:data});
                        })
                        .catch((error)=>{response.send(error)});
            })
module.exports = employeeRoute;