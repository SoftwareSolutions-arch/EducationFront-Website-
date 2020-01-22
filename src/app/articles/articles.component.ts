import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter, Inject } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  public articles:any =[];
  p: number = 1;
  constructor(private router: Router,) { }

  ngOnInit() {
    this.articles = JSON.parse(localStorage.getItem("ArticleDescription"));
    console.log("this.articles",this.articles)
  }
  redirect() {
    this.router.navigate(['/articles_description']);
  }
}

