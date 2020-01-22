import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { getServerPath } from '../../app/shared/app.config';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-icse',
  templateUrl: './icse.component.html',
  styleUrls: ['./icse.component.css']
})
export class IcseComponent implements OnInit {

  constructor(private router: Router,private _httpClient: HttpClient) { }
  title:any;
  PostText : any = [];
  public apiUrl = getServerPath();
  ngOnInit() {
    this.title = localStorage.getItem('BoradTitle');
    let jsoninput = {
      "posttype":"icse"
    }
    this._httpClient.post(`${this.apiUrl}/userapi/getPost`,jsoninput).subscribe((response: any) => {
      if (response.Status == 200) {
        this.PostText = response.result
      } else {
        this.PostText = ""
      }
    })
  }
  exam(){

  }
  college(){

  }
  redirect(){

  }
  abroard(){
    
  }

}
