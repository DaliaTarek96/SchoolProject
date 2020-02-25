import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/_service/subject/subject.service';
import { LoginService } from 'src/app/_service/login/login.service';
import { StudentsService } from 'src/app/_service/students/students.service';
import { Student } from 'src/app/_models/students/students';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  table=[];
  student:Student;
  days=['Sunday','Monday','Tuesday','Wednesday','Thursday'];
  classNo = '1/2'//will get from student or parent login
   constructor(private subject:SubjectService ,private loginServer:LoginService ,private stdser:StudentsService) { }
 
   ngOnInit() {
    let ID = JSON.parse(localStorage.getItem('id'));// to get current ID for Student
      this.stdser.getStudentData(ID.id).subscribe(s => {
        this.student = s;
        this.classNo = s.Class;
        this.subject.getAllClasses().subscribe(data=>{
          data.forEach(t=>{
           if(this.classNo==t.ClassNo)this.table=t.Table;
          })      
        })
    
       
      })
    
   }
 
 }
 
