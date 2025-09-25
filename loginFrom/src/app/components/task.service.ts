import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './models/Task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = 'http://localhost:8080/api/tasks'; // Spring Boot backend API URL
  private projectApiUrl = `http://localhost:8080/api/projects`;

  constructor(private http: HttpClient) { }

  // Fetch task by task_id and task_no
  getTask(taskId: number, taskNo: string): Observable<Task> {
    return this.http.get<Task>(`${this.baseUrl}/${taskId}/${taskNo}`);
  }

  // Update task
  updateTask(taskId: number, taskNo: string, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.baseUrl}/${taskId}/${taskNo}`, task);
  }

  getTaskByTaskNo(taskNo: string): Observable<Task> {
    return this.http.get<Task>(`${this.baseUrl}/taskNo/${taskNo}`);
  }

  // createTask(taskRequest: { task: Task, projId: number, userId: number }): Observable<Task> {
  //   return this.http.post<Task>(this.baseUrl, taskRequest);
  // }

  createTask(taskRequest: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, taskRequest);
  }

  getUserIdByProjectId(projectId: number): Observable<number> {
    return this.http.get<number>(`${this.projectApiUrl}/${projectId}/userId`);
  }
  // getTasksByProjectId(projId: number): Observable<Task[]> {
  //   return this.http.get<Task[]>(`${this.baseUrl}/project/${projId}`);
  // }

  deleteTask(task_no: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/taskNo/${task_no}`);
  }

  getTasksByProjectId(projId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/task/${projId}`);
  }
}
