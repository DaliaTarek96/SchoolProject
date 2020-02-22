import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/_service/employee/employee.service';
import { LoginService } from 'src/app/_service/login/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  myInnerWidth= window.innerWidth-18;

  employe={};
  constructor(private employee:EmployeeService , private login:LoginService) { }

  ngOnInit() {
    this.login.getUserId().subscribe(ID=>{
    this.employee.getAllEmplyee().subscribe(data=>{
      data.forEach(emp=>{
       
        if(emp['_id']==ID['Value'])this.employe=emp;
      })
    })})

}
}