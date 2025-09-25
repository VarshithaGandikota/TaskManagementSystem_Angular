import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

 private apiUrl="http://localhost:8080/api/projects";

  constructor(private http:HttpClient) { }

  // 
  
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl+'/fetch');
  }

  // getProjects(_userId:number): Observable<Project[]> {
  //   return this.http.get<Project[]>(`${this.apiUrl}/user/${_userId}`);
  // }

  saveProject(_userId :number,project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiUrl+`/user/${_userId}`, project);
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/${id}`);
  }

  updateProject(id: number, project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiUrl}/${id}`, project);
  }
}
