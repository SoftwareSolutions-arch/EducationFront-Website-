import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { getServerPath } from '../../app/shared/app.config';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';
import { LoginService } from '../services/login.service';
export interface DialogData {
  animal: String;
  name: string;
}
@Component({
  selector: 'app-mba-college',
  templateUrl: './mba-college.component.html',
  styleUrls: ['./mba-college.component.css']
})
export class MbaCollegeComponent implements OnInit {
  animal: string;
  name: string;
  Fees: any = [];
  Facilities: any = [];
  public Articles: any = [];
  p: number = 1;
  AddUserForm: FormGroup;
  params: any;
  checked: boolean = true;
  Specializations: any = [];
  coursesDetails: any = [];
  public TopMbaCollege: any = [];
  public Citys: any = [];
  public skip: any = [];
  public apiUrl = getServerPath();
  SignupForm: FormGroup;

  constructor(public dialog: MatDialog, private router: Router, private _httpClient: HttpClient, private fb: FormBuilder, private formBuilder: FormBuilder, private spinner: NgxSpinnerService) {
  }
  handlepage() {
    this.skip = {
      "skipvalue": (this.p) * 30
    }
    this.spinner.show();
    this._httpClient.post(`${this.apiUrl}/authApi/getcollegebylimit`, this.skip).subscribe((response: any) => {
      if (response.Status == 200) {
        this.spinner.hide();
        this.TopMbaCollege = response.result;
      } else {
        this.TopMbaCollege = [];
      }
    })
  }
  ShortListCollege(CollegeData) {
    var userinfo = JSON.parse(localStorage.getItem('UserInfo'))
    if (userinfo) {
      let jsoninput = {
        "userid": userinfo._id,
        "collegeid": CollegeData._id
      }
      this._httpClient.post(`${this.apiUrl}/authApi/shortlistcollege`, jsoninput).subscribe((response: any) => {
        if (response.Status == 200) {
          Swal.fire({
            title: 'success?',
            text: response.Message,
            type: 'success',
          }).then((result) => {
          })
        } else {

        }
      })
    } else {
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        data: { name: this.name, animal: this.animal }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.animal = result;
      });
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: { name: this.name, animal: this.animal }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }

  openApply() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: { name: this.name, animal: this.animal }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }

  ngOnInit() {
    var searchkeyvalue = JSON.parse(localStorage.getItem("SearchKey"))
    this.AddUserForm = this.fb.group({
      'FirstName': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      'Email': ['', Validators.compose([Validators.required, Validators.email])],
      'ContactNo': ['', Validators.compose([Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$'), Validators.minLength(10)])],
      'CourseName': ['', Validators.compose([Validators.required])],
      'QuestionName': ['', Validators.compose([Validators.required])]
    })
    var data = {
      "review_url":"",
      "title":searchkeyvalue
    }
    this._httpClient.post(`${this.apiUrl}/authApi/getcollege`,data).subscribe((response: any) => {
      if (response.Status == 200) {
        this.spinner.hide();
        this.TopMbaCollege = response.result;
      } else {
        this.TopMbaCollege = [];
      }
    })
    /************Get All City */
    this._httpClient.get(`${this.apiUrl}/userapi/getCity`).subscribe((response: any) => {
      if (response.Status == 200) {
        this.Citys = response.result;
      } else {
        this.Citys = [];
      }
    })
    /****get all fees */
    this._httpClient.get(`${this.apiUrl}/userapi/getallfees`).subscribe((response: any) => {
      if (response.Status == 200) {
        this.Fees = response.result;
      } else {
        this.Fees = [];
      }
    })
    this._httpClient.get(`${this.apiUrl}/userapi/getspecialization`).subscribe((response: any) => {
      if (response.Status == 200) {
        this.Specializations = response.result;
      } else {
        this.Specializations = [];
      }
    })
    this._httpClient.get(`${this.apiUrl}/userapi/getfacilities`).subscribe((response: any) => {
      if (response.Status == 200) {
        this.Facilities = response.result;
      } else {
        this.Facilities = [];
      }
    })

    this._httpClient.get(`${this.apiUrl}/userapi/allcourselist`).subscribe((response: any) => {
      if (response.Status == 200) {
        this.coursesDetails = response.result;
        console.log(this.coursesDetails,"this.TopEngineering")

      } else {
        this.coursesDetails = [];
      }
    })
  }

  CreateUser() {
    if (this.AddUserForm.valid) {
      let params = {
        "name": this.AddUserForm.value.FirstName,
        "email": this.AddUserForm.value.Email,
        "phone": this.AddUserForm.value.ContactNo,
        "course": this.AddUserForm.value.CourseName,
        "askquestion": this.AddUserForm.value.QuestionName
      }
      this.spinner.show();
      this._httpClient.post(`${this.apiUrl}/userapi/lead`,params).subscribe((res: any) => {
        if (res.Status == 200) {
          this.AddUserForm.reset();
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

  /********************Got to Article page */
  RedirectArticl(College) {
    //alert("ASdasd");
    localStorage.setItem("CollegeDetails", JSON.stringify(College))
    var Collegetitle = College.title.replace(/%20/g, "_");
    this.router.navigate(['/iit_kanpur'], { queryParams: { title: Collegetitle } });
    // let college_id = {
    //   "url_id": College.url
    // }
    // this._httpClient.post(`${this.apiUrl}/userapi/getcollegearticle`, college_id).subscribe((response: any) => {
    //   if (response.Status == 200) {
    //     this.Articles = response.result;
    //     localStorage.setItem("ArticleDescription",JSON.stringify(this.Articles));
    //     this.router.navigate(['/articles']);
    //   } else {
    //     this.Articles = [];
    //   }
    // })
  }

  /********************Got to LocationFilter */
  LocationFilter(Name, value) {
    this.checked = !value;
    if (value == true) {
      this.params = {
        "location": Name
      }
    } else {
      this.params = {
        "location": ""
      }
    }
    this._httpClient.post(`${this.apiUrl}/userapi/searchbylocation`, this.params).subscribe((response: any) => {
      if (response.Status == 200) {
        this.TopMbaCollege = response.result;
      } else {
        this.TopMbaCollege = [];
      }
    })
  }

  /********************Got to FeesFilter */
  FeesFilter(Name, value) {
    this.checked = !value;
    if (value == true) {
      this.params = {
        "location": Name
      }
    } else {
      this.params = {
        "location": ""
      }
    }
    this._httpClient.post(`${this.apiUrl}/userapi/searchbyFees`, this.params).subscribe((response: any) => {
      if (response.Status == 200) {
        this.TopMbaCollege = response.result;
      } else {
        this.TopMbaCollege = [];
      }
    })
  }

  SpecializationFilter(Name, value) {
    this.checked = !value;
    if (value == true) {
      this.params = {
        "location": Name
      }
    } else {
      this.params = {
        "location": ""
      }
    }
    this._httpClient.post(`${this.apiUrl}/userapi/searchbyspecialization`, this.params).subscribe((response: any) => {
      if (response.Status == 200) {
        this.TopMbaCollege = response.result;
      } else {
        this.TopMbaCollege = [];
      }
    })
  }
  FacilityFilter(Name, value) {
    this.checked = !value;
    if (value == true) {
      this.params = {
        "location": Name
      }
    } else {
      this.params = {
        "location": ""
      }
    }

    this.spinner.show();
    this._httpClient.post(`${this.apiUrl}/userapi/searchbyfacility`, this.params).subscribe((response: any) => {
      if (response.Status == 200) {
        this.spinner.hide();
        this.TopMbaCollege = response.result;
      } else {
        this.TopMbaCollege = [];
      }
    })
  }

}

export interface DialogDataLogin {
  animal: String;
  name: string;
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  SignupForm: FormGroup;
  public apiUrl = getServerPath();
  public user: any = [];
  loginForm: FormGroup;
  Loginshow: boolean = false;
  Registrationshow: boolean = true;
  public userData: any = [];
  constructor(public dialog: MatDialog, private router: Router, private _httpClient: HttpClient, private fb: FormBuilder, private formBuilder: FormBuilder, private logService: LoginService,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.SignupForm = fb.group({
      'first_name': ['', Validators.compose([Validators.required])],
      'last_name': ['', [Validators.compose([Validators.required])]],
      'email': ['', [Validators.compose([Validators.required])]],
      'cityname': ['', [Validators.compose([Validators.required])]],
      'password': ['', [Validators.compose([Validators.required])]],
      'contact': ['', [Validators.compose([Validators.required])]],
      'dob': ['', [Validators.compose([Validators.required])]],
    });
  }

  OpenLogin() {
    //this.dialogRef.close();
    this.Registrationshow = false;
    this.Loginshow = true;
    //this.dialogRef.close();

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  SignUp() {
    let jsonInput = {
      "firstname": this.SignupForm.value.first_name,
      "lastname": this.SignupForm.value.last_name,
      "usertypeid": "5d89c2402e8b9f5a5516d890",
      "email": this.SignupForm.value.email,
      "password": this.SignupForm.value.password,
      "cityname": this.SignupForm.value.cityname,
      "countryname": "india",
      "contact": this.SignupForm.value.contact,
      "dob": "15-05-1988",
      "profile_pic_status": "asdasd",
      "updatedprofile": false
    }
    this._httpClient.post(`${this.apiUrl}/authApi/createUser`, jsonInput).subscribe((response: any) => {
      if (response.Status == 200) {
        this.userData = response.Data;
        localStorage.setItem('UserInfo', JSON.stringify(this.userData));
        Swal.fire({
          title: 'success?',
          text: 'user registered successfully',
          type: 'success',
        }).then((result) => {
          this.dialogRef.close();
        })
      } else {
        this.user = [];
      }
    })
    console.log("SignupForm", this.SignupForm.value);
  }
  onSubmit() {
    this.logService.loginUser(this.loginForm.value).subscribe((res: any) => {
      if (res.Status == false) {
        Swal.fire({
          title: 'Error!',
          text: res.ErrorMessage,
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Ok',
          cancelButtonText: 'Cancel'
        }).then((result) => {
          if (result.value) {
            this.router.navigate(['/login']);
          }
        })
        return false;
      } else {
        Swal.fire({
          title: 'Success!',
          text: res.ErrorMessage,
          type: 'success',
          showCancelButton: true,
          confirmButtonText: 'Ok',
          cancelButtonText: 'Cancel'
        }).then((result) => {
          if (result.value) {
            this.router.navigate(['/dashboard']);
          }
        })
      }
    }, error => {
      console.log(error);
    })
  }
  redirect() {

  }



}


