import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';
import { Task } from '../models/Task';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/User';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [HttpClientModule,FormsModule,LayoutComponent,CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  task:Task={
    task_id: 0,
    task_no: '',
    title: '',
    task_start_date: new Date,
    task_created_date: new Date,
    task_update_date: new Date,
    task_end_date: new Date,
    task_status: '',
    task_assigne: '',
    task_description: '',
    task_comments: '',
    task_reported: '',
    user: {
      user_id: 0,
      username: '',
      email: '',
      password: '',
      project: [],
      task: []
    },
    project: {
      proj_id: 0,
      proj_name: '',
      proj_owner: '',
      proj_created_date: new Date,
      proj_description: '',
      user: {} as User,
      task: [],
    },
    proj_id: 0,
    user_id: 0
  }
  proj_id!: number;

  constructor(
    private taskService:TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    
      this.proj_id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.proj_id);
    // Fetch the tasks related to this project ID
    this.taskService.getTasksByProjectId(this.proj_id).subscribe((data: Task[]) => {
      this.tasks = data;
    });
  }

  toView(proj_id:number,taskNo:string){
    this.router.navigate(['/task-view',proj_id,taskNo]);
  }
  toUpdate(proj_id:number,taskId:number,taskNo:string){
    this.router.navigate(['/task-update',proj_id,taskId,taskNo]);
  }

  deleteTask(task_no: string) {
    if(confirm("Are you sure you want to delete this task?")) {
      this.taskService.deleteTask(task_no).subscribe(
        () => {
          console.log('Task deleted successfully');
          // Refresh the task list or update UI accordingly
          this.tasks = this.tasks.filter(task => task.task_no !== task_no);
        },
         error=> {
          console.error('Error deleting task', error);
        }
      );
    }
  }

 

}