import { Component, Input, ContentChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {

  @Input() post!: Post;
  @ContentChild('additRef') ref!: ElementRef;
  @Output() idRemoved = new EventEmitter<number>();

  constructor() {}

  onClick() {
    console.log('click');
    
    this.idRemoved.emit(this.post.index);
  }

  
  ngOnDestroy(){
    console.log('ngOnDestroy');
    
  }

}
