let express = require("express");
let sudentProRouter = express.Router();
let path = require("path");
let mongoose = require("mongoose");

require("../models/StudentProModel");

let studentproSchema = mongoose.model("StudentsPro");

//students --> get --> find all
sudentProRouter.route("/studentsPro")
    .get((request, response) => {
        studentproSchema.find({})
            .then(data => { response.send(data) })
            .catch((err) => {
                response.send({ err: err.errmsg });
            })
    })
    //add students and sending parametere with request body
    .post((request, response) => {
        let student = new studentproSchema({

            FullName: request.body.FullName,
            NationalID: request.body.NationalID,
            Password: request.body.Password,
            Adress: request.body.Adress,
            PhoneNumber: request.body.PhoneNumber,
            Class: request.body.Classroom,
            Degree: [],
            //[{subjectNasme:"",degree:""},{}...]
            // Table:request.body.Table,
            // {
            //classNo : ,[{subjectName: , teachername},...,....,...]

            // }, 
        });
        console.log(request.body)
        console.log(student)
        console.log("Add ..." + student);
        student.save().then(data => {
            console.log("student saved");
            console.log(response.send(data));

            // response.redirect('students');
        }).catch(err => {
            console.log("student not saved")

            response.send({ err: err.errmsg });
        });

    })

    /////////////////////////////

    .delete((request, response) => {

        studentproSchema.deleteOne({ _id: request.body.id })

            .then((data) => {
                response.send(data);
                console.log("student deleted ...");
            })
            .catch((error) => {
                response.send(error);
                console.log("student not deleted ...");
            });

    });
    // get one ...
    sudentProRouter.get("/studentsPro/:id",(request, response) => {
        studentproSchema.findOne({_id:request.params.id}).then((data) => {

            response.send(data);
            console.log("student get");
        }).catch((err) => {

            response.send({ err: err.errmsg });
            console.log("student not get");

        })
    })
    
    // edit student ...
    sudentProRouter.put("/studentsPro/:id",(request, response) => {
        console.log(request.body);
        studentproSchema.updateOne({ _id: request.params.id }, {

            $set: {
                FullName: request.body.FullName,
                NationalID: request.body.NationalID,
                Password: request.body.Password,
                Adress: request.body.Adress,
                PhoneNumber: request.body.PhoneNumber,
                Class: request.body.Classroom,
                Degree: [],
            }
        }).then((data) => {
            response.send(data);
            console.log("student edited");
        }).catch((err) => {

            response.send({ err: err.errmsg });
            console.log("student not edited");

        })
    })

module.exports = sudentProRouter;