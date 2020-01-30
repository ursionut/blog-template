import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogArticleDetailComponent } from './blog-article-detail/blog-article-detail.component';


const routes: Routes = [
  {
    path: 'articles',
    component: HomeComponent 
  },
  { 
    path: 'article/:id/:title', 
    component: BlogArticleDetailComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
