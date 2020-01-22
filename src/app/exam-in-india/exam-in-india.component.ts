import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog' ;

export interface animationpopup {
  animal: String;
  name: string;
}


@Component({
  selector: 'app-exam-in-india',
  templateUrl: './exam-in-india.component.html',
  styleUrls: ['./exam-in-india.component.css']
})
export class ExamInIndiaComponent implements OnInit {
  animal:string;
  name: string;
  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(exampopup, {
        // width: '100%',
        height: '50%',
        data: {name: this.name, animal: this.animal}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
      });
    }

  ngOnInit() {
  }

}

@Component({
  selector: 'exampopup',
  templateUrl: 'exampopup.html',
})
export class exampopup {

  constructor(
    public dialogRef: MatDialogRef<exampopup>,
    @Inject(MAT_DIALOG_DATA) public data: exampopup) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
