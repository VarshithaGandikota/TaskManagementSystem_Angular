// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {

//   private apiUrl = 'http://localhost:8080/api/auth'; // Spring Boot backend URL

//   constructor(private http: HttpClient) {}

//   login(email: string, password: string): Observable<any> {
//     return this.http.post(`${this.apiUrl}/login`, null, {
//       params: {
//         email: email,
//         password: password
//       }
//     });
//   }
// }
