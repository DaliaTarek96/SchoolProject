
let express = require("express")
let mongoose  =require("mongoose")
let activityRouter = express.Router();
require("./../models/activityModel")
let activityScheama = mongoose.model("schoolActivites")


activityRouter.route("/activity")
.get((request,response)=>{
    console.log('hh')
    activityScheama.find({}).then((activites)=>{
        console.log('gff',activites)
        response.send(activites)

    }).catch((error)=>{
        response.send(error)

    })
}).post((request,response)=>{
        console.log(request.body);
              let activity = new activityScheama({
                  _id:request.body.id,
                img:request.body.img,
                  description:request.body.description,
                  title:request.body.title,
                  


              })
              activity.save().then((obj)=>{
                      response.send(obj)
              })
    }).delete((request,response)=>{
        activityScheama.deleteOne({_id:request.body.id}).then((data)=>{
                 response.send(data)
        })

    })

module.exports =activityRouter;
