import { Component, OnInit } from '@angular/core';
import { getServerPath } from '../../app/shared/app.config';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-study-abroad',
  templateUrl: './study-abroad.component.html',
  styleUrls: ['./study-abroad.component.css']
})
export class StudyAbroadComponent implements OnInit {

  constructor(private _httpClient: HttpClient) { }
  Exams: any = [];
  Questions: any = [];
  public apiUrl = getServerPath();
  ngOnInit() {
    this._httpClient.get(`${this.apiUrl}/examapi/getexam`).subscribe((response: any) => {
      if (response.Status == 200) {
        this.Exams = response.result
      } else {
        this.Exams = ""
      }
    })

    this._httpClient.get(`${this.apiUrl}/authApi/getquestion`).subscribe((response: any) => {
      if (response.Status == 200) {
        this.Questions = response.result
      } else {
        this.Questions = ""
      }
    })
  }

}
