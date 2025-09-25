import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/users'; // Spring Boot backend URL

  constructor(private http: HttpClient) { }

  signup(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, user);
  }
}
