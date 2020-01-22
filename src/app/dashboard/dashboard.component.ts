import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
import { AuthService } from "angularx-social-login";
import { SearchcollegeService } from "../services/college/searchcollege.service";
import { LoginService } from '../services/login.service';
import { DashboardService } from '../dashboard.service';
import { getServerPath } from '../../app/shared/app.config';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";


import Swal from "sweetalert2";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public imageObject: any = [];
  public SearchCollegeList: any = [];
  public ShowSearchCollege : boolean = false;
  public globalCollegeData: any = [];
  public TopCollegetitle: any = [];
  public DashboardData : Boolean = true;
  loggedIn: boolean;
  public apiUrl = getServerPath()
  CourseDataList: any[];
  public data : any =[];
  SearchCollegeForm: FormGroup;
  loading = false;
  submitted = false;
  keyword:string
  returnUrl: string;
  error = '';
  constructor(private router: Router, private authService: AuthService, private SerachService: DashboardService, private fb: FormBuilder, private formBuilder: FormBuilder,
    private route: ActivatedRoute, public httpClient: HttpClient, private searchcollege: SearchcollegeService, private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.imageObject = [{
      image: '../../assets/img/slider/1-1.jpg',
      thumbImage: '../../assets/img/slider/1-1.jpg',
      alt: 'alt of image',
      title: 'title of image'
    }, {
      image: '../../assets/img/slider/1-2.jpg', // Support base64 image
      thumbImage: '../../assets/img/slider/1-2.jpg', // Support base64 image
      title: 'Image title', //Optional: You can use this key if want to show image with title
      alt: 'Image alt' //Optional: You can use this key if want to show image with alt
    }
    ];
    this.SearchCollegeForm = this.fb.group({
      'searchstring': ['']
    });
    this.keyword = 'name';
    var CollegeResult = []
    this.httpClient.get(`${this.apiUrl}/authApi/getcollege`).subscribe((response: any) => {
      if(response.Status=="200"){
        response.result.forEach((key : any, val: any) => {
          CollegeResult.push({"name":key.title})
        })
        this.data = CollegeResult;  
      }
    })
  }

  selectEvent(event){
    console.log("event",event)
    localStorage.setItem("SeacrhKey",event.name)
  }

  redirect(seacrhKey){
    this.spinner.show();
    this.TopCollegetitle = seacrhKey
    this.searchcollege.searchcolleges(seacrhKey).subscribe((res: any) => {
      if (res.Status == 200) {
        this.spinner.hide();
        this.SearchCollegeList = res.result;
        this.ShowSearchCollege = true;
        this.globalCollegeData = res.result;
        this.DashboardData = false;
      } else {
        this.spinner.hide();
        Swal.fire({
          title: 'Error!',
          text: res.Message,
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
      }
      //localStorage.setItem('Role', JSON.stringify(res.user.roleData));
      //localStorage.setItem('AuthKey', res['auth-key']);
    }, error => {
      console.log(error);
    })
  }

  SearchAny() {
    this.spinner.show();
    
    let seacrhKsy = localStorage.getItem("SeacrhKey");
    this.searchcollege.searchcolleges(seacrhKsy).subscribe((res: any) => {
      if (res.Status == 200) {
        this.spinner.hide();
        this.SearchCollegeList = res.result;
        this.ShowSearchCollege = true;
        this.globalCollegeData = res.result;
        this.DashboardData = false;
      } else {
        this.spinner.hide();
        Swal.fire({
          title: 'Error!',
          text: res.Message,
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
      }
      //localStorage.setItem('Role', JSON.stringify(res.user.roleData));
      //localStorage.setItem('AuthKey', res['auth-key']);
    }, error => {
      console.log(error);
    })
  }

  
}