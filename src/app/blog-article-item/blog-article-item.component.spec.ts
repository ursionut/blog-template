import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticleItemComponent } from './blog-article-item.component';

describe('BlogArticleItemComponent', () => {
  let component: BlogArticleItemComponent;
  let fixture: ComponentFixture<BlogArticleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogArticleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogArticleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
