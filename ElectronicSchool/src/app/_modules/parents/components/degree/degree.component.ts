import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/_service/students/students.service';
import { ControlService } from 'src/app/_service/control/control.service';
import { Parent } from 'src/app/_models/parent/parent';
import { ParentService } from 'src/app/_service/parent/parent.service';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.css']
})
export class DegreeComponent implements OnInit {
  found: boolean = false;
  classNo = ''//will get from student or parent login
  StudentName = ''//will get from student or parent login
  degress = [];
  state = [];
  parent: Parent;
  constructor(private stdser: StudentsService, private control: ControlService, private ParentSer: ParentService) { }

  ngOnInit() {

    this.control.getState().subscribe(state => {
      this.state = state['state'];
    });

    let ID = JSON.parse(localStorage.getItem('id'));// to get current ID for Student
    this.ParentSer.getAll().subscribe(parents => {  //get all parents
      parents.forEach(pare => {
        if (pare._id == ID.id) this.parent = pare;
        
        this.stdser.getSpecificSTD(this.parent.nationalId).subscribe(std => { // get student according to degree
          this.StudentName = std.FullName;
          this.classNo = std.Class;
          this.control.getAllStudent().subscribe(data => {
            data.forEach(stds => {
              if (stds.NationalID == std.NationalID) {
                this.found=true;
                this.degress = std.Degree;
                
              }
            })
          });
        });

      });
    });

  }

}
