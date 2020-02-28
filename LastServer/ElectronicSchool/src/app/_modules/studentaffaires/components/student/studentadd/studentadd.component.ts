import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/_service/students/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentadd',
  templateUrl: './studentadd.component.html',
  styleUrls: ['./studentadd.component.css']
})
export class StudentaddComponent implements OnInit {
myHeight= window.innerHeight-150;
isExist=false;

  savestudentdata:FormGroup;
  // nstd:Student= new Student(1,"asmaa hamed",9876524352,111,"mnofya",87678,2/2,[]);
  // object from  save data and send it to server ... ????
   
  constructor( private stdser:StudentsService , private router :Router) { }



  formValid(){
    return this.savestudentdata.invalid;

   }
    
    // this.stdser.addNewStudent(this.nstd).subscribe(a=>{
    //   console.log(a);
      
    // },err=>{
    //   console.log(err)})
    
    onSave(){
      // console.log(this.savestudentdata.value);
      this.isExist=false;
      //check if employee exist or not
      this.stdser.getAllstudents().subscribe(stds=>{
        stds.forEach(std=>{
          if(std.NationalID==this.savestudentdata.get('NationalID').value){this.isExist=true;}
        });
        if(!this.isExist){
  
          this.stdser.addNewStudent(this.savestudentdata.value).subscribe(a=>{
            this.router.navigateByUrl('/studentAffaires/Student/students')
            // console.log(a);
          },err=>{
            //  console.log(err)
            });
        }
      });
     
     
  
    }
  


get Fname(){
  return this.savestudentdata.get("FullName");
}

get nationalId(){
  return this.savestudentdata.get("NationalID");

}

get password(){
  return this.savestudentdata.get("Password");

}

get adress(){
  return this.savestudentdata.get("Adress");

}

get phoneNumber(){
  return this.savestudentdata.get("PhoneNumber");

}

get classroom(){
  return this.savestudentdata.get("Classroom");

}

// get mySubject(){
//   return this.savestudentdata.get("mysubject");

// }

// get myDegree(){
//   return this.savestudentdata.get("mydegree");
// }


  // Id:FormControl=new FormControl(10,Validators.required);
  // show(){
  //   console.log(this.Fname);
  //   console.log(this.nationalId);
  //   console.log(this.password);
  //   console.log(this.Subjects);
  // };


 
  
  ngOnInit(): void {
    // this.stdser.getAllstudents().subscribe(()=>{}, (error)=>{
    //   // console.log("erooor  fffffffffffffffff")
    //   // console.log(error)
  
    //   this.router.navigateByUrl("/Login")
  
    // })
    this.savestudentdata=new FormGroup({
      "FullName": new FormControl("",[Validators.required,Validators.minLength(15)]),
      "NationalID":new FormControl("",[Validators.required,Validators.min(10000000000000),Validators.max(99999999999999)]),
      "Password":new FormControl("",[Validators.required,Validators.minLength(8)]),
      "Adress": new FormControl("",Validators.required),
      "PhoneNumber": new FormControl("",Validators.required),
      "Classroom": new FormControl("",Validators.required),
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





  


