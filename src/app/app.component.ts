import { Component, AfterViewInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-pwa-app';
  posts: Array<Post>;

  constructor(protected readonly postService: PostService) {}

  ngAfterViewInit() {
    this.getPost();
    this.getPosts();
  }

  getPost() {
    this.postService.getPost('1')
    .subscribe((data: Post) => {
      console.log(data);
    });
  }

  getPosts() {
    this.postService.getPosts()
    .subscribe((data: Array<Post>) => {
      this.posts = data;
    });
  }
}
