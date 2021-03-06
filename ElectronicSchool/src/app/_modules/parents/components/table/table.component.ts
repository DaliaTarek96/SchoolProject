import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/students/students';
import { SubjectService } from 'src/app/_service/subject/subject.service';
import { StudentsService } from 'src/app/_service/students/students.service';
import { ParentService } from 'src/app/_service/parent/parent.service';
import { Parent } from 'src/app/_models/parent/parent';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  table = [];
  found: boolean = false;
  student: Student;
  parent:Parent;
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
  classNo = '1/2'//will get from student or parent login
  constructor(private subject: SubjectService, private stdser: StudentsService , private ParentSer:ParentService) { }

  ngOnInit() {
    let ID = JSON.parse(localStorage.getItem('id'));// to get current ID for Student
    this.ParentSer.getAll().subscribe(parents=>{ //get all parents
      parents.forEach(pare=>{
        if(pare._id==ID.id)this.parent=pare
       
        this.stdser.getSpecificSTD(this.parent.student_nationalId).subscribe(s => {// get child  National ID
          this.student = s;
          if (this.student != null) {
            this.found=true;
            this.classNo = s.Class;
            this.subject.getAllClasses().subscribe(data => {
              data.forEach(t => {
                if (this.classNo == t.ClassNo) this.table = t.Table;
              });
            });
          }
        });//end child
      })
    })
    

  }

}


