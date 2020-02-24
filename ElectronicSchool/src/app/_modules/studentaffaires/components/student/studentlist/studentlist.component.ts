import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/students/students';
import { StudentsService } from 'src/app/_service/students/students.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  students: Student[] = [];

  constructor(private stdser: StudentsService) { }





  deleteStudent(id: number) {
    let confirm = window.confirm("Do you want to delete this student");
    if (confirm) {
      this.stdser.deleteStudent(id).subscribe(a=>{
        for (let i = 0; i < this.students.length; i++) {
          if(id==this.students[i]._id){
            this.students.splice(i,1)

          }
          
        }
        // console.log(a);

      });

      // for (let i = 0; i < this.students.length; i++) {
      //   if (id == this.students[i]._id) {
      //     this.stdser.deleteStudent(this.students[i]._id).subscribe(a => {
      //       console.log(a);

      //     });


      //   }


      //   // this.students.splice(i, 1);

      // }

    }
    

  }


ngOnInit() {
  this.stdser.getAllstudents().subscribe(a => {
    console.log(a);
    this.students = a;

  });

}

}
