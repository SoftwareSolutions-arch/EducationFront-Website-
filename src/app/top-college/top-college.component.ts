import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter, Inject } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { getServerPath } from '../../app/shared/app.config';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
@Component({
  selector: 'app-top-college',
  templateUrl: './top-college.component.html',
  styleUrls: ['./top-college.component.css']
})
export class TopCollegeComponent implements OnInit {
  apiUrl = getServerPath();
  p: number = 1;
  @Input() CollegeSearchList;
  @Input() topcollegetitle
  public TopColleges: any = [];
  public title : any;
  constructor(private router: Router, public dialog: MatDialog, private _httpClient: HttpClient, private spinner: NgxSpinnerService) { }
  openSignUp(): void {
    const dialogRef = this.dialog.open(signinpopup, {
      // width: '100%',
      height: '80%',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  
  ngOnInit() {
    if(this.CollegeSearchList){
      this.TopColleges = this.CollegeSearchList;
      this.title = this.topcollegetitle
    }else{
      this._httpClient.get(`${this.apiUrl}/authApi/gettopcollege`).subscribe((response: any) => {
        if (response.Status == 200) {
          this.TopColleges = response.result;
        } else {
          this.TopColleges = [];
        }
      })
    }
  }
  redirect(CollegeData) {
    localStorage.setItem("CollegeDetails",JSON.stringify(CollegeData));
    var Collegetitle =  CollegeData.title.replace(/%20/g, "_");
    this.router.navigate(['/iit_kanpur'], { queryParams: { title: Collegetitle } });
  }
}

@Component({
  selector: 'signinpopup',
  templateUrl: 'signinpopup.html',
})
export class signinpopup {
  constructor(private authService: AuthService,
    public dialogRef: MatDialogRef<signinpopup>,
    @Inject(MAT_DIALOG_DATA) public data: signinpopup) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  signInWithGoogle(): void {
    alert("ASdasd")
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  
}