import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { getServerPath } from '../../app/shared/app.config';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-national-board',
  templateUrl: './national-board.component.html',
  styleUrls: ['./national-board.component.css']
})
export class NationalBoardComponent implements OnInit {

  constructor(private router: Router,private _httpClient: HttpClient) { }
  title:any;
  PostText : any = [];
  public apiUrl = getServerPath();
  ngOnInit() {
    this.title = localStorage.getItem('BoradTitle');
    let jsoninput = {
      "posttype":"cbse"
    }
    this._httpClient.post(`${this.apiUrl}/userapi/getPost`,jsoninput).subscribe((response: any) => {
      if (response.Status == 200) {
        this.PostText = response.result
      } else {
        this.PostText = ""
      }
    })
  }
  redirect() {
    this.router.navigate(['/other_articles']);
  }
  exam() {
    this.router.navigate(['/exam']);
  }
  college() {
    this.router.navigate(['/mba_college']);
  }
  abroard() {
    this.router.navigate(['/study_abroad']);
  }
}
