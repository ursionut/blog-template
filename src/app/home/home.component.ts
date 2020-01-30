import { Component, OnInit } from '@angular/core';
import { IArticle } from '../interfaces/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  posts: IArticle[] = [
    {
      id: 1,
      title: 'Material is an adaptable system of guidelines, components, and tools',
      body: 'Material is an adaptable system of guidelines, components, and tools',
      author: 'Ionut P. Urs',
      createdOn: '30 Jan 2020',
      likes: 50,
      shares: 24,
      image: 'huawei-nova.png',
      color: '#9aeb85',
      tags: 'nova',
    },
    {
      id: 2,
      title: 'Material is an adaptable system of guidelines, components, and tools',
      body: 'Material is an adaptable system of guidelines, components, and tools',
      author: 'Ionut P. Urs',
      createdOn: '30 Jan 2020',
      likes: 50,
      shares: 24,
      image: 'huawei-nova.png',
      color: '#9aeb85',
      tags: 'nova',
    },
    {
      id: 3,
      title: 'Material is an adaptable system of guidelines, components, and tools',
      body: 'Material is an adaptable system of guidelines, components, and tools',
      author: 'Ionut P. Urs',
      createdOn: '30 Jan 2020',
      likes: 50,
      shares: 24,
      image: 'huawei-nova.png',
      color: '#9aeb85',
      tags: 'nova',
    },
    {
      id: 4,
      title: 'Material is an adaptable system of guidelines, components, and tools',
      body: 'Material is an adaptable system of guidelines, components, and tools',
      author: 'Ionut P. Urs',
      createdOn: '30 Jan 2020',
      likes: 50,
      shares: 24,
      image: 'huawei-nova.png',
      color: '#9aeb85',
      tags: 'nova',
    },
    {
      id: 5,
      title: 'Material is an adaptable system of guidelines, components, and tools',
      body: 'Material is an adaptable system of guidelines, components, and tools',
      author: 'Ionut P. Urs',
      createdOn: '30 Jan 2020',
      likes: 50,
      shares: 24,
      image: 'huawei-nova.png',
      color: '#9aeb85',
      tags: 'nova',
    },
    {
      id: 6,
      title: 'Material is an adaptable system of guidelines, components, and tools',
      body: 'Material is an adaptable system of guidelines, components, and tools',
      author: 'Ionut P. Urs',
      createdOn: '30 Jan 2020',
      likes: 50,
      shares: 24,
      image: 'huawei-nova.png',
      color: '#9aeb85',
      tags: 'nova',
    },
    {
      id: 7,
      title: 'Material is an adaptable system of guidelines, components, and tools',
      body: 'Material is an adaptable system of guidelines, components, and tools',
      author: 'Ionut P. Urs',
      createdOn: '30 Jan 2020',
      likes: 50,
      shares: 24,
      image: 'huawei-nova.png',
      color: '#9aeb85',
      tags: 'nova',
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
