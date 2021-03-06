let express = require('express'),
    mongoose = require('mongoose'),
    SubjectRoute = express.Router();

// Student Subject Schema
require('../models/studentSubjectModel');
let studentSubjectSchema = mongoose.model('studentSubject');

SubjectRoute.route('/subject')
            .get((request,response)=>{
                studentSubjectSchema.find({})
                        .then((data)=>{
                            response.send(data)
                            // response.render("subject",{ClassSubject:data});
                        })
                        .catch((error)=>{response.send(error)});
            })
            .post((request,response)=>{
                let subjectObject =  new  studentSubjectSchema({
                    // _id:request.body._id,
                    ClassNo    :request.body.ClassNo,
                    StudentNo  :request.body.StudentNo,
                    Subject    :request.body.Subject,
                    Table      :[]
                });
                subjectObject.save()
                    .then((data)=>{
                        // response.redirect("/subject")
                        response.send(data)
                    })
                    .catch((error)=>{response.send(error)});
            })
            .put((request,response)=>{
                studentSubjectSchema.updateOne({_id:request.body._id},{
                        ClassNo:request.body.ClassNo,
                        StudentNo:request.body.StudentNo,

                }).then(data=>response.send(data)).catch(err=>response.send(err));
            })
            .delete((request,response)=>{
                studentSubjectSchema.deleteOne({_id:request.body._id})
                        .then(data=>response.send(data)).catch(err=>response.send(err));


            });
SubjectRoute.get('/subject/:id',(request,response)=>{
    studentSubjectSchema.find({_id:request.params.id})
            .then((data)=>{
                response.send(data)
                // response.render("subject",{ClassSubject:data});
            })
            .catch((error)=>{response.send(error)});
});
// For adding Table To Class Subject
SubjectRoute.put('/subject/Table',(request,response)=>{
    studentSubjectSchema.updateOne({_id:request.body._id},{
           Table:request.body.Table
    }).then(data=>response.send(data)).catch(err=>response.send(err));
})

module.exports = SubjectRoute;