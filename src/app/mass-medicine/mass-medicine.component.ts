import { Component, OnInit, Inject } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

export interface popup_massmedicine {

}
@Component({
  selector: 'app-mass-medicine',
  templateUrl: './mass-medicine.component.html',
  styleUrls: ['./mass-medicine.component.css']
})
export class MassMedicineComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(mass_quepopup, {
      // width: '100%',
      height: '80%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDialog1(): void {
    const dialogRef = this.dialog.open(mass_anspopup, {
      width: '30%',
      height: '60%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

  redirect() {
    this.router.navigate(['/sample_paper']);
  }
  redirect_question() {
    this.router.navigate(['/question']);
  }
  redirect_paper() {
    this.router.navigate(['/sample_paper']);
  }
  redirect_topclg() {
    this.router.navigate(['/top_college']);
  }
  openDialog2() {
    this.router.navigate(['/top_college']);
  }
  redirect3() {
    this.router.navigate(['/top_college']);
  }
}


@Component({
  selector: 'mass_quepopup',
  templateUrl: 'mass_quepopup.html',
})
export class mass_quepopup {

  constructor(
    public dialogRef: MatDialogRef<mass_quepopup>,
    @Inject(MAT_DIALOG_DATA) public data: mass_quepopup) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}


@Component({
  selector: 'mass_anspopup',
  templateUrl: 'mass_anspopup.html',
})
export class mass_anspopup {

  constructor(
    public dialogRef: MatDialogRef<mass_anspopup>,
    @Inject(MAT_DIALOG_DATA) public data: mass_anspopup) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
