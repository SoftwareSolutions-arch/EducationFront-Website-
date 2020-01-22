import { Component, OnInit, Inject } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getServerPath } from '../../app/shared/app.config';
import { HttpClient } from '@angular/common/http';

export interface popup_arts {

}
@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.css']
})
export class ArtsComponent implements OnInit {

  public apiUrl = getServerPath();
  Exams: any = [];
  constructor(private router: Router, public dialog: MatDialog, private _httpClient: HttpClient) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(popup_arts, {
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
  redirect() {
    this.router.navigate(['/exam_in_india']);
  }
  redirect_paper() {
    this.router.navigate(['/question']);
  }
}

@Component({
  selector: 'popup_arts',
  templateUrl: 'popup_arts.html',
})
export class popup_arts {

  constructor(
    public dialogRef: MatDialogRef<popup_arts>,
    @Inject(MAT_DIALOG_DATA) public data: popup_arts) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}