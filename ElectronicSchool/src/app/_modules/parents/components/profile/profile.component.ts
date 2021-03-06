import { Component, OnInit } from '@angular/core';
import { ParentService } from 'src/app/_service/parent/parent.service';
import { LoginService } from 'src/app/_service/login/login.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 
  

  Parent={};
  constructor(private ParentService:ParentService , private login:LoginService) { }

  ngOnInit() {
   let ID=JSON.parse( localStorage.getItem('id'))
    this.ParentService.getAll().subscribe(data=>{
      data.forEach(par=>{
       
        if(par['_id']==ID.id)this.Parent=par;
      })
    })

}
}