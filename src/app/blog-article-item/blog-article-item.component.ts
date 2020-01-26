import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { IArticle } from '../interfaces/article';

@Component({
  selector: 'app-blog-article-item',
  templateUrl: './blog-article-item.component.html',
  styleUrls: ['./blog-article-item.component.less']
})
export class BlogArticleItemComponent implements OnInit {

  posts: any;
  errorMsg: string;

  constructor(private articles: ArticlesService) { }

  ngOnInit() {
    this.articles.getArticles().subscribe(
      data => this.posts = data,
      error => this.errorMsg = error
      )
  }

}
