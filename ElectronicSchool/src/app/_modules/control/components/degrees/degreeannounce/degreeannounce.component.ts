import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/_service/control/control.service';

@Component({
  selector: 'app-degreeannounce',
  templateUrl: './degreeannounce.component.html',
  styleUrls: ['./degreeannounce.component.css']
})
export class DegreeannounceComponent implements OnInit {

  statee:boolean[]=[false,false,true,true,false,false];
  Years :string[]=['First Primary','Second Primary','Third Primary','Forth Primary','Fifth Primary','Sixth Primary'];
  constructor(private ControlService:ControlService) { }
  change(index){
    //confirm button
    this.statee[index]=! this.statee[index];
    this.ControlService.saveState(this.statee).subscribe(data=>{
      })
  }
  ngOnInit() {
    this.ControlService.getState().subscribe(data=>{
      this.statee=data['state'];
    })
  }

}
