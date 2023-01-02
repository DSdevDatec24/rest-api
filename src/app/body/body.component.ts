import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
@Injectable({providedIn: "root"})
export class BodyComponent {
  title: string = "Hier könnte ihre Werbung stehen!"

  loadedPost: Post[] = [];

  constructor(private http: HttpClient){}

  sendPost(){
    console.log("Post verschickt");
    alert("Post verschickt")
  }

  fetchPosts(){
    this.http.get<Post[]>('https://angular-http-projekt-default-rtdb.europe-west1.firebasedatabase.app/posts.json').subscribe();
  }

}
