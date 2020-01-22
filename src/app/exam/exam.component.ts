import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getServerPath } from '../../app/shared/app.config';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  public ExamsData : any = [];
  public apiUrl = getServerPath();
  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
    this._httpClient.get(`${this.apiUrl}/examapi/getexam`).subscribe((response: any) => {
      if(response.Status==200){
        this.ExamsData = response.result;
      }else{
        this.ExamsData = [];
      }
    })
  }

}
