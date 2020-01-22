import { Component, OnInit, Inject } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getServerPath } from '../../app/shared/app.config';
import { HttpClient } from '@angular/common/http';
export interface anspopup_mass {
}
@Component({
  selector: 'app-mass-comm',
  templateUrl: './mass-comm.component.html',
  styleUrls: ['./mass-comm.component.css']
})
export class MassCommComponent implements OnInit {

  public apiUrl = getServerPath();

  Exams: any = [];
  constructor(private router: Router, public dialog: MatDialog, private _httpClient: HttpClient) { }
  openDialog1(): void {
    const dialogRef = this.dialog.open(anspopup_mass, {
      // width: '100%',
      height: '80%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(masspopup_login, {
      // width: '50%',
      height: '78%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  openDialog2(): void {
    const dialogRef = this.dialog.open(quepopup_mass, {
      width: '50%',
      height: '78%',
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
  selector: 'anspopup_mass',
  templateUrl: 'anspopup_mass.html',
})
export class anspopup_mass {

  constructor(
    public dialogRef: MatDialogRef<anspopup_mass>,
    @Inject(MAT_DIALOG_DATA) public data: anspopup_mass) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}


@Component({
  selector: 'masspopup_login',
  templateUrl: 'masspopup_login.html',
})
export class masspopup_login {

  constructor(
    public dialogRef: MatDialogRef<masspopup_login>,
    @Inject(MAT_DIALOG_DATA) public data: masspopup_login) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}


@Component({
  selector: 'quepopup_mass',
  templateUrl: 'quepopup_mass.html',
})
export class quepopup_mass {

  constructor(
    public dialogRef: MatDialogRef<quepopup_mass>,
    @Inject(MAT_DIALOG_DATA) public data: quepopup_mass) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}



