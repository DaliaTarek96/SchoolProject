import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   items=[{name:'Add Degrees',link:'/control/mainPage/showDegrees'},
   {name:'Announce Degrees',link:'/control/mainPage/announceDegrees'}
      ,{name:'My Profile',link:'/control/mainPage/MyProfile'},
    ];
  constructor(private aroute:ActivatedRoute) { }

  ngOnInit() {
    
  }

}
