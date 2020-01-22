import { Component, OnInit, Inject, ComponentFactoryResolver } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { getServerPath } from '../../shared/app.config';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from "sweetalert2";

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-iit-kanpur',
  templateUrl: './iit-kanpur.component.html',
  styleUrls: ['./iit-kanpur.component.css']
})
export class IitKanpurComponent implements OnInit {
  animal: string;
  apiUrl = getServerPath();
  collegeDetauils: any = [];
  ReviewList: any = [];
  CourseList: any = [];
  p: number = 1;
  ArticleList: any = [];
  CutOffList: any = [];
  CollegeList: any = [];
  Scholarship: any = [];
  Facilities : any =[];
  Highlities : any =[];

  constructor(private router: Router, public dialog: MatDialog, private http: HttpClient, private spinner: NgxSpinnerService) { }
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(signuppopup, {
  //        width: '100%',
  //       height: '50%',
  //       data: {name: this.name, animal: this.animal}
  //     });

  //     dialogRef.afterClosed().subscribe(result => {
  //       console.log('The dialog was closed');
  //       this.animal = result;
  //     });
  //   }
  scrollToElement($element): void {
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  ngOnInit() {
    this.collegeDetauils = JSON.parse(localStorage.getItem("CollegeDetails"));
    let Rivew = {
      "review_url":this.collegeDetauils.url
    }
    this.spinner.show();
    this.http.post(`${this.apiUrl}/userapi/getreview`,Rivew).subscribe((response: any) => {
      if (response.Status == 200) {
        this.spinner.hide();
        this.ReviewList = response.result;
      }else{
        this.ReviewList = [];
      }
    });
    this.http.post(`${this.apiUrl}/userapi/courseslist`,Rivew).subscribe((response: any) => {
      if (response.Status == 200) {
        this.spinner.hide();
        this.CourseList = response.result;
      } else {
        this.CourseList = [];
      }
    });
    this.http.post(`${this.apiUrl}/userapi/getarticle`,Rivew).subscribe((response: any) => {
      if (response.Status == 200) {
        this.spinner.hide();
        this.ArticleList = response.result;
      } else {
        this.ArticleList = [];
      }
    });

    this.http.post(`${this.apiUrl}/userapi/getcutoffs`,Rivew).subscribe((response: any) => {
      if (response.Status == 200) {
        this.spinner.hide();
        this.CutOffList = response.result;
      } else {
        this.CutOffList = [];
      }
    });

    this.http.post(`${this.apiUrl}/authApi/getcollege`,Rivew).subscribe((response: any) => {
      if (response.Status == 200) {
        this.spinner.hide();
        var highlightData = [];
        var facilitieData = [];
        this.CollegeList = response.result;
        this.CollegeList.forEach(function(value, key) {
          var json_data = JSON.parse(value.facilitie);
          for(var i in json_data){
            facilitieData.push([json_data[i]]);
          }
          var json_data = JSON.parse(value.highlight);
          for(var i in json_data){
            highlightData.push([json_data[i]]);
          }
        })
        this.Highlities = highlightData
        this.Facilities = facilitieData
      } else {
        this.CollegeList = [];
      }
    });

    this.http.post(`${this.apiUrl}/userapi/getscholarship`,Rivew).subscribe((response: any) => {
      if (response.Status == 200) {
        this.spinner.hide();
        this.Scholarship = response.result;
      } else {
        this.Scholarship = [];
      }
    });    
  }

  ArticleDetails(Article){
    localStorage.setItem("ArtilceID",JSON.stringify(Article.articleDetailUrl));
    this.router.navigate(['/articles_description']);
    
  }

  DownloadBrouchere() {
    Swal.fire({
      title: 'Success!',
      text: "your brochure has been send to you registered mail",
      type: 'success',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Cancel'
    })
  }
  ShortList() {
    Swal.fire({
      title: 'Success!',
      text: "College has been shortListed successfully",
      type: 'success',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Cancel'
    })
  }

}


// @Component({
//   selector: 'signuppopup',
//   templateUrl: 'signuppopup.html',
// })
// export class Dialog {

//   constructor(
//     public dialogRef: MatDialogRef<signuppopup>,
//     @Inject(MAT_DIALOG_DATA) public data: signuppopup) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }