import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material';
import { inject } from '@angular/core/testing';


@Component({
  selector: 'app-matconfirmdialog',
  templateUrl: './matconfirmdialog.component.html',
  styleUrls: ['./matconfirmdialog.component.css']
})
export class MatconfirmdialogComponent implements OnInit {

  constructor(
         public dialogRef:MatDialogRef<MatconfirmdialogComponent>,
         @Inject(MAT_DIALOG_DATA) public data, ) { }

  ngOnInit() {
  }
  closeDialog(){
    this.dialogRef.close()
  }

}
