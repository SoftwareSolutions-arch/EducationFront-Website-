import { Component, OnInit, Inject } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getServerPath } from '../../app/shared/app.config';
import { HttpClient } from '@angular/common/http';
export interface popup_law {

}
@Component({
  selector: 'app-law',
  templateUrl: './law.component.html',
  styleUrls: ['./law.component.css']
})
export class LawComponent implements OnInit {


  public apiUrl = getServerPath();

  Exams : any = [];
  constructor(private router: Router, public dialog: MatDialog,private _httpClient: HttpClient) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(popup_law, {
      // width: '100%',
      height: '80%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  openDialog1(): void {
    const dialogRef = this.dialog.open(law_anspopup, {
      width: '30%',
      height: '60%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(law_quepopup, {
      width: '30%',
      height: '60%',
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
    this.router.navigate(['/sample_paper']);

  }
  redirect_question() {
    this.router.navigate(['/question']);
  }

  redirect_topclg() {
    this.router.navigate(['/top_college']);
  }

  redirect3() {
    this.router.navigate(['/college_review'])
  }
}


@Component({
  selector: 'law_quepopup',
  templateUrl: 'law_quepopup.html',
})
export class law_quepopup {

  constructor(
    public dialogRef: MatDialogRef<law_quepopup>,
    @Inject(MAT_DIALOG_DATA) public data: law_quepopup) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}


@Component({
  selector: 'popup_law',
  templateUrl: 'popup_law.html',
})
export class popup_law {

  constructor(
    public dialogRef: MatDialogRef<popup_law>,
    @Inject(MAT_DIALOG_DATA) public data: popup_law) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}


@Component({
  selector: 'law_anspopup',
  templateUrl: 'law_anspopup.html',
})
export class law_anspopup {

  constructor(
    public dialogRef: MatDialogRef<law_anspopup>,
    @Inject(MAT_DIALOG_DATA) public data: law_anspopup) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}