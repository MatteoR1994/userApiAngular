import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../model/address';
import { Company } from '../model/company';
import { Geo } from '../model/geo';
import { Post } from '../model/post';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/' + id);
  }

  getPostsbyUserId(id: number): Observable<Post[]>{
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?userId=' + id);
  }

}
