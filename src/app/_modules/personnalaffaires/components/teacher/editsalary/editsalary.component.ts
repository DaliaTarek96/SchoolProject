import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/_service/teacher/teacher.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editsalary',
  templateUrl: './editsalary.component.html',
  styleUrls: ['./editsalary.component.css']
})
export class EditsalaryComponent implements OnInit {

  oldTeacherSalary:Number;
  newTeacherSalary:Number
  id:Number
    constructor(
  private teacherService:TeacherService,
  private activatedRouter :ActivatedRoute
  
  
    ) { }
  
    ngOnInit() {
      this.activatedRouter.params.subscribe((activeLink)=>{
        this.teacherService.getOneTeacher(activeLink.id).subscribe((teacher)=>{
              this.oldTeacherSalary=teacher.salary;
              this.id= activeLink.id;
        })
  
      })
    }
    updateTeacherSalary(form){
      this.teacherService.updateTeacherSalary({id:this.id,salary:this.newTeacherSalary})
      .subscribe((data)=>{
        console.log(data)
  
      })
      console.log(form)
  
  
    }
  
  }