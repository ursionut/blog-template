import { Component, OnInit, Input } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { IArticle } from '../interfaces/article';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog-article-item',
  templateUrl: './blog-article-item.component.html',
  styleUrls: ['./blog-article-item.component.less']
})
export class BlogArticleItemComponent implements OnInit {
  @Input() id: number;
  @Input() bgColor: string;
  @Input() image: string;
  @Input() date: string;
  @Input() author: string;
  @Input() title: string;
  errorMsg: string;
  posts: any;
  

  constructor(private articles: ArticlesService, private router: Router) { }

  showPost(id:number, title:string):any {
    this.router.navigate(['/article', id, title])
  }

  ngOnInit() {
    this.articles.getArticles().subscribe(
      data => this.posts = data,
      error => this.errorMsg = error
      )
  }

}
