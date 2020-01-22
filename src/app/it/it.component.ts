import { Component, OnInit, Inject } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getServerPath } from '../../app/shared/app.config';
import { HttpClient } from '@angular/common/http';

export interface popupIT {

}

@Component({
  selector: 'app-it',
  templateUrl: './it.component.html',
  styleUrls: ['./it.component.css']
})
export class ITComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog, private _httpClient: HttpClient) { }
  public apiUrl = getServerPath();
  Exams: any = [];
  openDialog(): void {
    const dialogRef = this.dialog.open(popupIT, {
      //  width: '100%',
      height: '80%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  ngOnInit() {
    this._httpClient.get(`${this.apiUrl}/examapi/getexam`).subscribe((response: any) => {
      if (response.Status == 200) {
        this.Exams = response.result
      } else {
        this.Exams = ""
      }
    })
  }
  redirect_paper() {
    this.router.navigate(['/question']);
  }
  redirect_question() {
    this.router.navigate(['/question']);
  }
}

@Component({
  selector: 'popupIT',
  templateUrl: 'popupIT.html',
})
export class popupIT {

  constructor(
    public dialogRef: MatDialogRef<popupIT>,
    @Inject(MAT_DIALOG_DATA) public data: popupIT) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
