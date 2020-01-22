import { Component, OnInit ,Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  animal: string;
  name: string;

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(statepopup, {
        //  width: '100%',
        // height: '50%',
        // data: {name: this.name, animal: this.animal}
      });
    }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
Component({
  selector: 'statepopup',
  templateUrl: 'statepopup.html',
})
export class statepopup {

  constructor(
    public dialogRef: MatDialogRef<statepopup>,
    @Inject(MAT_DIALOG_DATA) public data: statepopup) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}