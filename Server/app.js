let express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    mongoose = require('mongoose'),
    cors = require('cors'),

    subjectRoute = require('./routes/SubjectRoute'),
    controlRoute = require('./routes/ControlRoute'),
    employeeRoute = require('./routes/employeeRoute'),
    sudentProRouter = require('./routes/StudentProRouter'),
    parentRouter = require('./routes/parentRouter'),
    teacherRouter = require('./routes/TeacherRouter'),
    loginRouter = require('./routes/LoginRouter');



let app = express();
mongoose.connect('mongodb://localhost:27017/SchoolDB',{ useNewUrlParser: true ,useUnifiedTopology: true})
      .then(()=>console.log("DB server connect"))
      .catch(e => console.log("DB error", e));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// middle wares 
app.use((request,response,next)=>{
  console.log(request.url+" "+request.method);
  next();
});
// routing
app.use('/Home',(request,response,next)=>{
  response.send('Home Page ...');
  next();
});
app.use(loginRouter);
app.use('/StudentAffaires',sudentProRouter);
app.use('/StudentAffaires',parentRouter);
app.use('/StudentAffaires',subjectRoute);
app.use('/control',controlRoute);

app.use('/employeeAffaires',employeeRoute);
app.use('/teachers',teacherRouter);
app.use((request,response,next)=>{
  response.send('Sorry, website in maintanance ...');
  next();
});

app.use((request,response,next)=>{
  response.send('Sorry, website in maintanance ...');
  next();
});

app.use((error,request,response,next)=>{
  response.send(error);
  next();
});
//listen 
let port = process.env.port || 8000;
app.listen(port,()=>{
  console.log("I'm listening ...")
});