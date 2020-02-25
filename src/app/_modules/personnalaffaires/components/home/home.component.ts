import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myInnerHeight= window.innerHeight-200;
  items=[
    {name:'Teacher',link:'/personalAffaires/Employee/Teacher'},{name:'Add Teacher',link:'/personalAffaires/Employee/TeacherAdd'},{name:'Employe',link:'/personalAffaires/Employee/List'} ,
    {name:'Add Employee',link:'/personalAffaires/Employee/Add'} ,{name:'My Profile',link:'/personalAffaires/Employee/Profile'}]
  constructor() { }

  ngOnInit() {
  }

}
