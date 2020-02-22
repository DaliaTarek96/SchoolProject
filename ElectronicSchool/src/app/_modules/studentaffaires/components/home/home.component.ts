import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myInnerHeight= window.innerHeight-200;
  items=[
    {name:'Students',link:'/studentAffaires/Student/students'},{name:'Add Student',link:'/studentAffaires/Student/StudentAdd'},{name:'Parents',link:'/studentAffaires/Student/parent'} ,
    {name:'Add Parent',link:'/studentAffaires/Student/parentadd'},{name:'Student Subjects',link:'/studentAffaires/Student/Subject'}  ,{name:'My Profile',link:'/studentAffaires/Student/Profile'}]
 
  constructor() { }

  ngOnInit() {
  }

}
