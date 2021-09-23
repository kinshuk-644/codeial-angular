import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

//decorator 
@Injectable({
  providedIn: 'root'
})
export class PostsListService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/v1/posts');
  }
}
