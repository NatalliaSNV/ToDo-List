import { Component, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import { Post } from "../app.component";

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent {

    @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

    @ViewChild('inputTitle') inputRef!: ElementRef;

    title='';
    text='';

    onClick() {
        if (this.title.trim() && this.text.trim()) {
            const post: Post = {
                title: this.title,
                text: this.text
            }

            this.onAdd.emit(post);
            console.log('post emit', post);

            this.title = '';
            this.text = '';
        }

    }

    onFocusTitle() {
        this.inputRef.nativeElement.focus();
    }
}