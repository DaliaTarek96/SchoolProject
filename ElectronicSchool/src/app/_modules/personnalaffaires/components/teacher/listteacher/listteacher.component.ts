import { Component, OnInit } from '@angular/core';
import { Teachers } from 'src/app/_models/teacher/teacher';
import { TeacherService } from 'src/app/_service/teacher/teacher.service';
import { Router } from '@angular/router';
// import { DialogService } from 'src/app/_service/teacher/dialog.service';
// import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listteacher',
  templateUrl: './listteacher.component.html',
  styleUrls: ['./listteacher.component.css']
})
export class ListteacherComponent implements OnInit {

// teachersArry:MatTableDataSource<any>

serachWord:String="";
disblaedColums : String[] =['fullName']
  arr = ["basicinfo","Salary"]
        techersList:Teachers[]
        myfun(){
          
        }
     
  constructor(private teacherService:TeacherService,
    private naviggateRouter:Router,
    // private dialogService:DialogService
  
  ) { }

  ngOnInit() {
    this.teacherService.getTeachers().subscribe((data)=>{
      this.techersList =data
       console.log(this.techersList)
      //  this.teachersArry= new MatTableDataSource(this.techersList)
    })
   let  x={id:3}
    console.log(x)
  }
  navigateTo(e,t){
    console.log(e)
    console.log(t)
       if(e=="basicinfo"){
    this.naviggateRouter.navigate(["/personalAffaires/Employee/TeacherEdit/"+t])
  }else{
    this.naviggateRouter.navigate(["/personalAffaires/Employee/TeacherSalary/"+t])

  }
}
}
 
// deleteTeacher(teacherId,index){
//  this.teacherService.deleteTeacher(teacherId).subscribe((response)=>{
//    this.techersList.splice(index,1)
//    console.log(response)
//  })
// this.dialogService.openconfirmdialog("Are you sure you want to delete this TEacher").
// afterClosed().subscribe((response)=>{
//   console.log(response)
//   if(response){
//      this.teacherService.deleteTeacher(teacherId).subscribe((response)=>{
//    this.techersList.splice(index,1)
//    console.log(response)
//  })
//   }
// })
// }
// }