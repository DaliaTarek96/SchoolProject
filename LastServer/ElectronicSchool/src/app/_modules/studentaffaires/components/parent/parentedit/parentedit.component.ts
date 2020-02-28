import { Component, OnInit } from '@angular/core';
import { ParentService } from 'src/app/_service/parent/parent.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Parent } from 'src/app/_models/parent/parent';

@Component({
  selector: 'app-parentedit',
  templateUrl: './parentedit.component.html',
  styleUrls: ['./parentedit.component.css']
})
export class ParenteditComponent implements OnInit {


  EditParent: Parent = new Parent(0,"","",0,0,"",0,0)

  savaEdit() {
    this.ParentService.Update(this.EditParent).subscribe((newVlaue) => {
      console.log(newVlaue)
      console.log(this.EditParent)
      this.Router.navigate(["/studentAffaires/Student/parent"])
    })
  }

  constructor(
    private ParentService: ParentService,
    private Router: Router,
    private aroute:ActivatedRoute
    
  ) { }

  ngOnInit(): void {
    this.aroute.params.subscribe(a=>{
      this.ParentService.getdetails(a.id).subscribe(d=>{
        console.log(d)
        this.EditParent=d;
      })
    }, (error)=>{
      // console.log("erooor  fffffffffffffffff")
      // console.log(error)
  
      this.Router.navigateByUrl("/Login")
  
    })
  }

}

