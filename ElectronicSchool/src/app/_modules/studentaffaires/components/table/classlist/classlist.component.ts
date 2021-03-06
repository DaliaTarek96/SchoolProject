import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/_models/subject/subject';
import { SubjectService } from 'src/app/_service/subject/subject.service';

@Component({
  selector: 'app-classlist',
  templateUrl: './classlist.component.html',
  styleUrls: ['./classlist.component.css']
})
export class ClasslistComponent implements OnInit {
  subjects:Subject[] =[];
  Years =["AllYear",1,2,3,4,5,6];
  selectYear ="AllYear";
  constructor(private subjectService : SubjectService) { }
  sa(d){
    this.selectYear=d;
  }
  deleteClass(id){
    let con = confirm('Are you sure, You want to delete this class?')
    if(con){
      this.subjectService.delete(id).subscribe(()=>{this.ngOnInit()});
    }
  }

  ngOnInit() {
    this.subjectService.getAllClasses().subscribe(data=>{this.subjects=data;});
  }

}

