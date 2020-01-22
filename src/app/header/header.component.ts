import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SearchcollegeService } from "../services/college/searchcollege.service";
import Swal from "sweetalert2";
import { getServerPath } from '../../app/shared/app.config';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  LocalUserData: any = [];
  title:any
  firstName :any = [];
  shortlisted : any = [];
  public apiUrl = getServerPath();
  public imageObject: any = [];
  public SearchCollegeList: any = [];
  public ShowSearchCollege : boolean = false;
  public globalCollegeData: any = [];
  public TopCollegetitle: any = [];
  public DashboardData : Boolean = true;
  loggedIn: boolean;
  CourseDataList: any[];
  public data : any =[];
  loading = false;
  submitted = false;
  keyword:string
  returnUrl: string;
  error = '';
  constructor(private router: Router, private _httpClient: HttpClient,private spinner: NgxSpinnerService, private searchcollege: SearchcollegeService) { }

  ngOnInit() {
    this.LocalUserData = JSON.parse(localStorage.getItem('UserInfo'));
    //console.log("this.LocalUserData",this.LocalUserData)
  }
  LogOut(){
    localStorage.removeItem('UserInfo');
    this.LocalUserData = "";
    this.router.navigate(['/']);
  }
  CbseBoard(boardtitle){
    localStorage.setItem('BoradTitle',boardtitle);
    var Title  = localStorage.getItem('BoradTitle'); 
    if(Title=="NIOS"){
      this.router.navigate(['/nios']);
    }else if(Title=="CBSE"){
      this.router.navigate(['/national_broad']);
    }else if(Title =="ICSE"){
      this.router.navigate(['/icse']);
    }
  }
  GetShortlistedCollege(){
    this.router.navigate(['/shortlistcollege']);
    var UserData = JSON.parse(localStorage.getItem('UserInfo'));
    let jsoninput = {
      "userid":UserData._id
    }
    this._httpClient.post(`${this.apiUrl}/authApi/getshortlistcollege`,jsoninput).subscribe((response: any) => {
      if(response.Status=="200"){
        this.shortlisted = response.Data
      }
    })
  }
  redirect(seacrhKey){
    localStorage.setItem("SearchKey",JSON.stringify(seacrhKey))
    if(seacrhKey=='Engineering'){
      this.router.navigate(['/engineering_college']);
    }else if(seacrhKey=='Medical'){
      this.router.navigate(['/medical_college']);
    }else if(seacrhKey=='Management'){
      this.router.navigate(['/mba_college']);
    }
  }  
}
