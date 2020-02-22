import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/_service/teacher/teacher.service';
import { ActivatedRoute } from '@angular/router';
import { Teachers } from 'src/app/_models/teacher/teacher';

@Component({
  selector: 'app-teacherdetails',
  templateUrl: './teacherdetails.component.html',
  styleUrls: ['./teacherdetails.component.css']
})
export class TeacherdetailsComponent implements OnInit {

  public techer: Teachers;
  public flag :boolean = false
  days = ["sunday", "monday", "tuesday", "wednesday", "thursday"]
  public techercourses = []
  public classes = []
  public teacherTableLength=0;
  public teacherClassses: any
  /// teacher table 
  public teacherTable = []
  teacherId: Number;
  constructor(private techerService: TeacherService,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe((activeLink) => {
      console.log(activeLink.id)
      this.techerService.getOneTeacher(activeLink.id).subscribe((data) => {
        this.teacherId = activeLink.id
        console.log(data)
        this.techer = data;
        this.techercourses = data.subjects.classesName
        console.log(this.techer)
      })

    })
  }

  showSchdual(e) {
    this.flag= true;
    for (let i = 0; i < this.techercourses.length; i++) {
      this.classes.push(this.techercourses[i].ClassNo);
    }
    console.log(this.classes)
    this.techerService.getTeacherClasses({ classArray: this.classes }).subscribe((data) => {
      this.teacherClassses = data;
      console.log(this.teacherClassses)
    })

    let temp = []
    for (let s = 0; s < this.teacherClassses.length; s++) {

      console.log(this.teacherClassses)

      for (let i = 0; i < this.teacherClassses[s].Table.length; i++) {
        for (let y = 0; y < this.teacherClassses[s].Table[i].length; y++) {

          if (this.teacherClassses[s].Table[i][y].teacher == this.teacherId) {
            let obj = {
              day: i,
              time: y,
              class: this.teacherClassses[s].ClassNo
            }
            console.log(this.teacherClassses[s].Table[i][y])
            temp.push(obj)
            break;
          }
        }
      }
    }
    console.log(this.teacherTable)

    for (let i = 0; i < 5; i++) {
      let new_arr = temp.filter(function (e) {
        return e.day == i
      })
      if (new_arr.length > 0) {
        this.teacherTable.push(new_arr)

      }
    }
    this.teacherTableLength = this.teacherTable.length;
    console.log(this.teacherTable)
   
  }
}