import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Subject } from 'src/app/_models/subject/subject';
import { Router, ActivatedRoute } from '@angular/router';
import { SubjectService } from 'src/app/_service/subject/subject.service';

@Component({
  selector: 'app-classedit',
  templateUrl: './classedit.component.html',
  styleUrls: ['./classedit.component.css']
})
export class ClasseditComponent implements OnInit {
  editSubject:FormGroup;
  subject : Subject  = new Subject(0,'',0,[]);
  constructor(private router:Router , private aroute:ActivatedRoute,
      private subService:SubjectService) { }

  get name(){
    return this.editSubject.get('Name');
  }
  get StdNO(){
    return this.editSubject.get('StdNO');
  }
  
  get valid(){
    return this.editSubject.invalid 
  }

  save(){
    let sub = new Subject(this.subject._id,this.editSubject.get('Name').value,this.editSubject.get('StdNO').value,[]) 
    this.subService.update(sub).subscribe((data)=>{
      this.router.navigate(['/StudentAffaires/subject']);
    })
  }
  ngOnInit() {
    this.aroute.params.subscribe(a=>{
      this.subService.getOneClass(a.id).subscribe(data=>this.subject=data[0])
    })
    this.editSubject=new FormGroup({
      'Name' : new FormControl('',[Validators.required,Validators.pattern('(?=[1-6])(?=.*[/])(?=[1-9]).{3}')]),
      'StdNO': new FormControl('',[Validators.required, Validators.min(20),Validators.max(35)]),

    });
  }

}
