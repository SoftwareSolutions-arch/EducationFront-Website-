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
@Component({
  selector: 'app-medical-college',
  templateUrl: './medical-college.component.html',
  styleUrls: ['./medical-college.component.css']
})
export class MedicalCollegeComponent implements OnInit {

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
  public TopMedicalcollege: any = [];
  public Citys: any = [];
  public skip: any = [];
  public apiUrl = getServerPath();
  SignupForm: FormGroup;
  constructor(public dialog: MatDialog, private router: Router, private _httpClient: HttpClient, private fb: FormBuilder, private formBuilder: FormBuilder, private spinner: NgxSpinnerService) { }

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
      "review_url": "",
      "title": searchkeyvalue
    }
    this._httpClient.post(`${this.apiUrl}/authApi/getcollege`, data).subscribe((response: any) => {
      if (response.Status == 200) {
        this.spinner.hide();
        this.TopMedicalcollege = response.result;
      } else {
        this.TopMedicalcollege = [];
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

  ShortListCollege(MbaCollege){

  }
  openApply(){

  }

  handlepage() {
    
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
      this._httpClient.post(`${this.apiUrl}/userapi/lead`, params).subscribe((res: any) => {
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
        } else {
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
        this.TopMedicalcollege = response.result;
      } else {
        this.TopMedicalcollege = [];
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
        this.TopMedicalcollege = response.result;
      } else {
        this.TopMedicalcollege = [];
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
        this.TopMedicalcollege = response.result;
      } else {
        this.TopMedicalcollege = [];
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
        this.TopMedicalcollege = response.result;
      } else {
        this.TopMedicalcollege = [];
      }
    })
  }
}