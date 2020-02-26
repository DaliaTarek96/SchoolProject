import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myInnerHeight= window.innerHeight;
  id:number;

  constructor( private activeroute:ActivatedRoute) { }

  ngOnInit() {
    this.activeroute.params.subscribe(a=>{
      console.log(a['id']);//id
      this.id=a['id'];
      console.log(this.id)
    })
  }
}