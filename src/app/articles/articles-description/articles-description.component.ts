import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter, Inject } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { getServerPath } from '../../shared/app.config';

@Component({
  selector: 'app-articles-description',
  templateUrl: './articles-description.component.html',
  styleUrls: ['./articles-description.component.css']
})
export class ArticlesDescriptionComponent implements OnInit {
  public articles:any =[];
  p: number = 1;
  apiUrl = getServerPath();
  ArticleDetails:any = [];
  constructor(private spinner: NgxSpinnerService,private http: HttpClient,) { }

  @Input() CollegeArticles;
  
  ngOnInit() {
    let ArticleId = JSON.parse(localStorage.getItem("ArtilceID"));
    var params = {
      "articleid":ArticleId
    }
    var ArticleDetailsData = []
    this.http.post(`${this.apiUrl}/userapi/getarticledetails`,params).subscribe((response: any) => {
      if (response.Status == 200) {
        response.result.forEach(element => {
          ArticleDetailsData.push({"html": element.html.replace(/&lt;/g,'').replace(/&gt;/g,'').replace(/(<(.*?)>|&\w+;)/g,'')})
        });
        this.ArticleDetails = ArticleDetailsData;
        console.log("this.ArticleDetails I am here==========",this.ArticleDetails)
      }
    });
    //console.log("this.articles==========I am herer",(this.articles))
  }

}
