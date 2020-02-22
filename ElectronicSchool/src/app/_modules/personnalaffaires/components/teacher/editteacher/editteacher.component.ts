import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TeacherService } from 'src/app/_service/teacher/teacher.service';
import { Teachers } from 'src/app/_models/teacher/teacher';

@Component({
  selector: 'app-editteacher',
  templateUrl: './editteacher.component.html',
  styleUrls: ['./editteacher.component.css']
})
export class EditteacherComponent implements OnInit {

  teacher :Teachers
  addTeacherForm:FormGroup
  constructor( 
    private eacherService:TeacherService,
    private activeRouter:ActivatedRoute,
    private navRouter:Router
  ) { }
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  ngOnInit() {

    this.addTeacherForm = new FormGroup({
      fullName: new FormControl('',[Validators.required]),
      Address: new FormControl('',[Validators.required]),
      nationalId: new FormControl('',[Validators.required,Validators.maxLength(14)]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      phoneNumber: new FormControl('',[Validators.required,Validators.minLength(11)]),
      salary: new FormControl('',[Validators.required]),
      subject: new FormControl('',[Validators.required]),
      classes: new FormControl('',[Validators.required]),


    })
    this.activeRouter.params.subscribe((activLink)=>{
      console.log(activLink)
            this.eacherService.getOneTeacher(activLink.id).subscribe((data)=>{
              console.log(data)
              this.teacher= data
               this.dropdownList = data.subjects.classesName
               console.log(this.dropdownList)
            })
    })



    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'ClassNo',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  
  updateTeacher(){    
    console.log(this.addTeacherForm)                                                                        
    this.eacherService.updateTeacherBasicInfo(this.teacher).subscribe((data)=>{
      console.log(data)
      // this.navRouter.navigate(["/TeacherList"]);
    })

  }
 
onItemSelect(item: any) {
  console.log(item);
  console.log(this.selectedItems);

}
onSelectAll(items: any) {
  console.log(items);
  // this.selectedItems= items
}
  get fullName(){
    return this.addTeacherForm.controls.fullName;
  }
  get Address(){
    return this.addTeacherForm.controls.Address;
  }
  get nationalID(){
    return this.addTeacherForm.controls.nationalId;
  }
  get password(){
    return this.addTeacherForm.controls.password;
  }
  get salary(){
    return this.addTeacherForm.controls.salary;
  }
  get phoneNumber(){
    return this.addTeacherForm.controls.phoneNumber;
  }


}

