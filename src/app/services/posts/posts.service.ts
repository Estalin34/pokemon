
import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post{
  id?: number;
  userId:number;
  title:string;
  body:string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  changePost(arg0: string) {
    throw new Error('Method not implemented.');
  }
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  // Obtiene la lista de posts
  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  // Crea un nuevo post
  createPost(post: Post): Observable<Post> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<Post>(this.url, post, { headers });
  }

  // Actualiza un post existente
  updatePost(post: Post): Observable<Post> {
    if (post.id === undefined) {
      throw new Error('Post id is required for updating.');
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put<Post>(`${this.url}/${post.id}`, post, { headers });
  }

  // Elimina un post existente
  deletePost(post: Post): Observable<Post> {
    if (post.id === undefined) {
      throw new Error('Post id is required for deleting.');
    }
    return this.http.delete<Post>(`${this.url}/${post.id}`);
  }
  
}