import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/_service/login/login.service';
import { StudentsService } from 'src/app/_service/students/students.service';
import { ControlService } from 'src/app/_service/control/control.service';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.css']
})
export class DegreeComponent implements OnInit {
  innerHeight = window.innerHeight;
  classNo = ''//will get from student or parent login
  StudentName =''//will get from student or parent login
  degress =[];
  state=[];
  constructor(private loginServer:LoginService,private stdser:StudentsService,private control:ControlService) { }

  ngOnInit() {
    //.......check state to appear result or not
    this.control.getState().subscribe(state=>{
      this.state = state['state'];
    });

    this.loginServer.getUserId().subscribe(a=>{// to get current ID for Student
      this.stdser.getStudentData(a['Value']).subscribe(std => {// get student according to degree
        this.StudentName=std.FullName;
          this.classNo=std.Class;
         this.control.getAllStudent().subscribe(data=>{         
          data.forEach(std=>{
            if(std.FullName==this.StudentName)this.degress=std.Degree;
          })
        });
      })})
  }

}