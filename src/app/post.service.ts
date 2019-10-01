import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IPost, Post } from "./post.model";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private http: HttpClient) {}

  getPost(id: string): Observable<Post> {
    const target: string = this.url.concat(id);
    return this.http
      .get<IPost>(target)
      .pipe(map((data: IPost) => new Post().deserialize(data)));
  }

  getPosts(): Observable<Array<Post>> {
    return this.http
      .get<Array<IPost>>(this.url)
      .pipe(map((data: Array<IPost>) => data.map((elem: IPost) => new Post().deserialize(elem))));
  }
}
