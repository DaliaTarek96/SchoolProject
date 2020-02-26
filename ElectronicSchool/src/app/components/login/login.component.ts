import { Component, OnInit } from '@angular/core';
import { faLock,faUser } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/_service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faUser =faUser;
  faLock = faLock;
  User:string;
  loginuser:FormGroup;
  errMsg:string='';

 getRadioValue(event) {
   // console.log(event.target.value);
   this.User=event.target.value;
 }

 
 formValid(){
   return this.loginuser.invalid;

  }

get nationalId(){
 return this.loginuser.get("NationalID");

}

get password(){
 return this.loginuser.get("Password");

}

 constructor( private loginservice:LoginService , private router:Router) { 
  
 }

 login(){
 //  console.log() this.loginuser.value
  this.errMsg='';
   if(this.User=="Student"){

     this.loginservice.userLogin(this.loginuser.value).subscribe(a=>{
       console.log(a['_id']);
       if(a==null)this.errMsg='Password Or National ID Incorrect ...';
       else {
        localStorage.setItem('id',JSON.stringify({id:a['_id']}))
        this.router.navigateByUrl("/Students");
         
         }
     })
   }
  else if(this.User=="Teacher"){
     this.loginservice.userLogin(this.loginuser.value).subscribe(a=>{
       console.log(a);
       if(a==null)this.errMsg='Password Or National ID Incorrect ...';
       else {
        localStorage.setItem('id',JSON.stringify({id:a['_id']}))
        this.router.navigateByUrl("/studentsPro/profile/"+a['_id']);

       
        } 


     })
   }
   else if(this.User=="Parent"){
     this.loginservice.userLogin(this.loginuser.value).subscribe(a=>{
       console.log(a);
       if(a==null)this.errMsg='Password Or National ID Incorrect ...';
       else
       {
        localStorage.setItem('id',JSON.stringify({id:a['_id']}))
        this.router.navigateByUrl("/Parents");

        } 


     })
   }
   else if(this.User=="Control"){
     this.loginservice.userLogin(this.loginuser.value).subscribe(a=>{
       console.log(a);
       if(a==null)this.errMsg='Password Or National ID Incorrect ...';
       else{
         localStorage.setItem('id',JSON.stringify({id:a['_id']}))
          this.router.navigateByUrl("/control");

        }  
       


     })
   }
   else if(this.User=="StudentAffaires"){
     this.loginservice.userLogin(this.loginuser.value).subscribe(a=>{
       console.log(a);
       if(a==null)this.errMsg='Password Or National ID Incorrect ...';
       else{
         localStorage.setItem('id',JSON.stringify({id:a['_id']}))
          this.router.navigateByUrl("/studentAffaires");

        }  
      


     })
   }
   else if(this.User=="EmployeeAffaires"){
     this.loginservice.userLogin(this.loginuser.value).subscribe(a=>{
       console.log(a);
       if(a==null)this.errMsg='Password Or National ID Incorrect ...';
       else {
        localStorage.setItem('id',JSON.stringify({id:a['_id']}))
        this.router.navigateByUrl("/personalAffaires");

        } 


     })
   }



 }

 ngOnInit():void {
   this.loginuser=new FormGroup({
     "NationalID":new FormControl("",[Validators.required,Validators.min(10000000000000),Validators.max(99999999999999)]),
     "Password":new FormControl("",[Validators.required,Validators.minLength(8)]),
     "user":new FormControl('',[Validators.required])
    
   });

  
 }

}
