import { Component, OnInit, Inject } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { getServerPath } from '../../app/shared/app.config';

export interface popupmba {

}

@Component({
  selector: 'app-mba',
  templateUrl: './mba.component.html',
  styleUrls: ['./mba.component.css']
})
export class MbaComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog,private _httpClient: HttpClient) { }
  public apiUrl = getServerPath();
  public QuestionList:any=[];
  p: number = 1;
  openDialog(): void {
    const dialogRef = this.dialog.open(popupmba, {
      //  width: '100%',
      height: '80%',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this._httpClient.get(`${this.apiUrl}/authApi/getquestion`).subscribe((response: any) => {
      if (response.Status == 200) {
        this.QuestionList = response.result;
      } else {
        this.QuestionList = [];
      }
    })
  }
  redirect_question() {
    this.router.navigate(['/question']);
  }
}

@Component({
  selector: 'popupmba',
  templateUrl: 'popupmba.html',
})
export class popupmba {

  constructor(
    public dialogRef: MatDialogRef<popupmba>,
    @Inject(MAT_DIALOG_DATA) public data: popupmba) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}