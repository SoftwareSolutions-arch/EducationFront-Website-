import { Component, OnInit, Inject } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getServerPath } from '../../app/shared/app.config';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";

export interface popup_tourism {
}

@Component({
  selector: 'app-tourism',
  templateUrl: './tourism.component.html',
  styleUrls: ['./tourism.component.css']
})
export class TourismComponent implements OnInit {

  public apiUrl = getServerPath();
  Exams: any = [];
  AddUserForm: FormGroup;
  
  constructor(private router: Router, public dialog: MatDialog,private _httpClient: HttpClient,private fb: FormBuilder,private spinner: NgxSpinnerService) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(popup_tourism, {
      //  width: '100%',
      height: '80%',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {
    this.AddUserForm = this.fb.group({
      'FirstName': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      'Email': ['', Validators.compose([Validators.required, Validators.email])],
      'ContactNo': ['', Validators.compose([Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$'), Validators.minLength(10)])],
    })
    this._httpClient.get(`${this.apiUrl}/examapi/getexam`).subscribe((response: any) => {
      if (response.Status == 200) {
        this.Exams = response.result
      } else {
        this.Exams = ""
      }
    })
  }
  CreateUser() {
    if (this.AddUserForm.valid) {
      let params = {
        "name": this.AddUserForm.value.FirstName,
        "email": this.AddUserForm.value.Email,
        "phone": this.AddUserForm.value.ContactNo
      }
      this.spinner.show();
      this._httpClient.post(`${this.apiUrl}/userapi/lead`,params).subscribe((res: any) => {
        if (res.Status == 200) {
          this.spinner.hide();
          Swal.fire({
            title: 'Success',
            text: res.Message,
            type: 'success',
            showCancelButton: true,
            confirmButtonText: 'Ok',
            cancelButtonText: 'Cancel'
          })
        }else{
          Swal.fire({
            title: 'Error',
            text: "something went wrong",
            type: 'error',
            showCancelButton: true,
            confirmButtonText: 'Ok',
            cancelButtonText: 'Cancel'
          })
        }
      })
    }
  }
  redirect_question() {
    this.router.navigate(['/question']);
  }
}

@Component({
  selector: 'popup_tourism',
  templateUrl: 'popup_tourism.html',
})
export class popup_tourism {

  constructor(
    public dialogRef: MatDialogRef<popup_tourism>,
    @Inject(MAT_DIALOG_DATA) public data: popup_tourism) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}