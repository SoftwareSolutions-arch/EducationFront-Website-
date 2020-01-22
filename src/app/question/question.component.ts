import { Component, OnInit  , Inject} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { getServerPath } from '../../app/shared/app.config';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(public dialog: MatDialog, private _httpClient: HttpClient, private spinner: NgxSpinnerService) { }
  public apiUrl = getServerPath();
  public QuestionList :any = [];
  p: number = 1;
  openDialog(): void {
    const dialogRef = this.dialog.open(que_popup, {
      width: '50%',
      height: '77%',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
    
  openDialog1(): void {
    const dialogRef = this.dialog.open(que_anspopup, {
      width: '50%',
      height: '77%',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  ngOnInit() {
    this.spinner.show();
    this._httpClient.get(`${this.apiUrl}/authApi/getquestion`).subscribe((response: any) => {
      if (response.Status == 200) {
        this.spinner.hide()
        this.QuestionList = response.result
      } else {
        this.QuestionList;
      }
    })
  } 

}

@Component({
  selector: 'que_popup',  
  templateUrl: 'que_popup.html',
})
export class que_popup {

  constructor(
    public dialogRef: MatDialogRef<que_popup>,
    @Inject(MAT_DIALOG_DATA) public data: que_popup) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
@Component({
  selector: 'que_anspopup',
  templateUrl: 'que_anspopup.html',
})
export class que_anspopup {

  constructor(
    public dialogRef: MatDialogRef<que_anspopup>,
    @Inject(MAT_DIALOG_DATA) public data: que_anspopup) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}