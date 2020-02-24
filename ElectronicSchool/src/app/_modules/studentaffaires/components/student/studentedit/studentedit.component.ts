import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/_models/students/students';
import { StudentsService } from 'src/app/_service/students/students.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studentedit',
  templateUrl: './studentedit.component.html',
  styleUrls: ['./studentedit.component.css']
})
export class StudenteditComponent implements OnInit {

  saveNewStudentData: FormGroup;
  student: Student;

  constructor(private stdser: StudentsService, private activeroute: ActivatedRoute) {

  }


  onSaveNewdata(){
    console.log(this.saveNewStudentData.value);
    this.activeroute.params.subscribe(a=>{
      this.stdser.updateStudentData(this.saveNewStudentData.value,a.id).subscribe(std=>{
        console.log(std);
        
      },err=>{
        console.log(err)
      })
    });
    

  }

  // show() {
  //   console.log(this.student.FullName);
  // }


  formValid() {
    return this.saveNewStudentData.invalid;

  }

  get fullname() {
    return this.saveNewStudentData.get("FullName");
  }


  get nationalId(){
    return this.saveNewStudentData.get("NationalID");

  }

 get password(){
  return this.saveNewStudentData.get("Password");

 }

  get adress(){
    return this.saveNewStudentData.get("Adress");

  }

  get phoneNumber(){
    return this.saveNewStudentData.get("PhoneNumber");

  }

  get classroom(){
    return this.saveNewStudentData.get("Classroom");

   }


  ngOnInit(): void {
    this.activeroute.params.subscribe(a => {
      this.stdser.getStudentData(a.id).subscribe(s => {
        console.log(s);// object
        this.student = s;
        this.saveNewStudentData.setValue({
          "FullName": s.FullName,
          "NationalID": s.NationalID,
          "Password": s.Password,
          "Adress": s.Adress,
          "PhoneNumber": s.PhoneNumber,
          "Classroom": s.Class
        })



        // console.log(this.student);

      })

      // console.log(a); // print id 
    });
    ////////////////
    this.saveNewStudentData = new FormGroup({
      "FullName": new FormControl("", Validators.required),
      "NationalID": new FormControl("", [Validators.required, Validators.minLength(12)]),
      "Password": new FormControl("", [Validators.required, Validators.minLength(8)]),
      "Adress": new FormControl("", Validators.required),
      "PhoneNumber": new FormControl("", Validators.required),
      "Classroom": new FormControl("", Validators.required),
      // "mysubject":new FormControl("",Validators.required),
      // "mydegree":new FormControl("",Validators.required),

      //   "subjects":new FormArray([new FormGroup({
      //     "subject":new FormControl("Math"),
      //     "degree":new FormControl("95%"),
      //   })
      // ]),


    })







  }

}
