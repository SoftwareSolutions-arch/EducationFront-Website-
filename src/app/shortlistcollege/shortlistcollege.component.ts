import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getServerPath } from '../../app/shared/app.config';
@Component({
  selector: 'app-shortlistcollege',
  templateUrl: './shortlistcollege.component.html',
  styleUrls: ['./shortlistcollege.component.css']
})
export class ShortlistcollegeComponent implements OnInit {

  constructor(private _httpClient: HttpClient) { }
  shortlisted : any = [];
  public apiUrl = getServerPath();
  ngOnInit() {
    var UserData = JSON.parse(localStorage.getItem('UserInfo'));
    let jsoninput = {
      "userid":UserData._id
    }
    this._httpClient.post(`${this.apiUrl}/authApi/getshortlistcollege`,jsoninput).subscribe((response: any) => {
      if(response.Status=="200"){
        this.shortlisted = response.Data;
        console.log("this.shortlisted",this.shortlisted)
      }else{
        this.shortlisted = "";
      }
    })
  }

}
