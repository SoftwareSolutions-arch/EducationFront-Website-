import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { getServerPath } from '../../app/shared/app.config';
import { HttpClient } from '@angular/common/http';

export interface animationpopup {
  animal: String;
  name: string;
}

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {
  animal: string;
  name: string;
  Exams : any = [];
  public apiUrl = getServerPath();

  constructor(public dialog: MatDialog, private router: Router, private _httpClient: HttpClient) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(animationpopup, {
      // width: '60%',
      height: '80%',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  openDialog1(): void {
    const dialogRef = this.dialog.open(anspopup, {
      width: '40%',
      height: '60%',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit() {
    this._httpClient.get(`${this.apiUrl}/examapi/getexam`).subscribe((response: any) => {
      if (response.Status == 200) {
        this.Exams = response.result
      }else{
        this.Exams = ""
      }
    })
  }
  redirect() {
    this.router.navigate(['/sample_paper']);
  }

  redirect1() {
    this.router.navigate(['/college_review']);
  }
}

@Component({
  selector: 'animationpopup',
  templateUrl: 'animationpopup.html',
})
export class animationpopup {

  constructor(
    public dialogRef: MatDialogRef<animationpopup>,
    @Inject(MAT_DIALOG_DATA) public data: animationpopup) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
@Component({
  selector: 'anspopup',
  templateUrl: 'anspopup.html',
})
export class anspopup {

  constructor(public dialogRef: MatDialogRef<anspopup>,
    @Inject(MAT_DIALOG_DATA) public data: anspopup) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
