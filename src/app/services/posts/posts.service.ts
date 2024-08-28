import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostsService {

  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }


  // // Crea un nuevo post
  createPost(post: Post): Observable<Post> {
    const httpHeaders =new HttpHeaders({
      "Content-type":"application/json"
    })
     return this.http.post<Post>(this.url, post,{headers:httpHeaders});
  }

  // // Actualiza un post existente
  updatePost(post: Post): Observable<Post> {
       const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.http.put<Post>(`${this.url}/${post.id}`, post, { headers:httpHeaders });
  }

  // // Elimina un post existente
  deletePost(post: Post): Observable<Post> {
     return this.http.delete<Post>(`${this.url}/${post.id}`);
  }

}