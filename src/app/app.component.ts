import { Component } from '@angular/core';

export interface Post{
  title: string,
  text: string,
  index?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[] = [
    {title: 'breakfast', text: 'cook eggs', index: 1},
    {title: 'lunch', text: 'cook soup', index: 2},
    {title: 'dinner', text: 'cook meat', index: 3}
  ]

  addPost(post: Post){
    this.posts.unshift(post);
  }

  onRemove(id: number) {
    console.log('id', id);
    
    this.posts = this.posts.filter((elem) => elem.index != id);
  }
}
