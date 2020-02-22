let mongoose = require('mongoose'),
    studentSubjectSchema = new mongoose.Schema({
        _id:Number,
        ClassNo:String,
        StudentNo:Number,       
        Subject:[],
        Table:[]
      });

mongoose.model('studentSubject',studentSubjectSchema)