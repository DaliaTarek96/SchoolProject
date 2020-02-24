import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ParentService } from 'src/app/_service/parent/parent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parentadd',
  templateUrl: './parentadd.component.html',
  styleUrls: ['./parentadd.component.css']
})
export class ParentaddComponent implements OnInit {
  loginForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private parent:ParentService) { }
    ngOnInit() {

      this.loginForm = this.fb.group({
        "_id": ['', Validators.compose([Validators.required])],
        "name": ['', Validators.compose([Validators.required])],
        "userName": ['', [Validators.required]],
        "password": ['', Validators.compose([Validators.required])],
        "nationalId": ['', Validators.compose([Validators.required])],
        "Address": ['', Validators.compose([Validators.required])],
        "phoneNumber": ['', Validators.compose([Validators.required])],
        "student_nationalId": ['', Validators.compose([Validators.required])]
      })   
    }
    save() {
      console.log('hi')
      console.log(this.loginForm.value)
      this.parent.addParent(this.loginForm.value).subscribe(data=>{
        console.log(data);
         this.router.navigateByUrl('/studentAffaires/Student/parent');
      })
      
    }
   
  }


   // save() {
  //   this.ParentService.addParent(this.addParent.value).subscribe((newParent) => {
  //     console.log(newParent)
  //   })
  // }
  //constructor(private router: Router, private ParentService: ParentService) { }

  // get id() {
  //   return this.addParent.get('id')
  // }
  // get name() {
  //   return this.addParent.get('name')
  // }
  // get username() {
  //   return this.addParent.get('username')
  // }
  // get address() {
  //   return this.addParent.get('address')
  // }
  // get nationalid() {
  //   return this.addParent.get('nationalid')
  // }
  // get phone() {
  //   return this.addParent.get('phone')
  // }
  // get password() {
  //   return this.addParent.get('password')
  // }


//   ngOnInit() {
//     this.addParent = new FormGroup({
//       'id': new FormControl('', Validators.required),
//       'name': new FormControl('', Validators.required),
//       'username': new FormControl('', Validators.required),
//       'password': new FormControl('', Validators.required),
//       'nationalid': new FormControl('', Validators.required),
//       'address': new FormControl('', Validators.required),
//       'phone': new FormControl('', Validators.required),
//     })
//   }
// }
