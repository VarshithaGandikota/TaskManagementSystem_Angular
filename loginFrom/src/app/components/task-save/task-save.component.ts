import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from "../layout/layout.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-save',
  standalone: true,
  imports: [LayoutComponent,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './task-save.component.html',
  styleUrl: './task-save.component.css'
})
export class TaskSaveComponent implements OnInit{
  taskForm!: FormGroup;
  
  task = {
    task_no: '',
    title: '',
    task_start_date: '',
    task_created_date: '',
    task_update_date: '',
    task_end_date: '',
    task_status: 'Open',
    task_assigne: '',
    task_description: '',
    task_comments: '',
    task_reported: ''
  };
  projectId!: number;
  userId!: number;

  constructor(private taskService: TaskService, private route: ActivatedRoute,private fb: FormBuilder,private router:Router) { }

 

  getUserId(): void {
    this.taskService.getUserIdByProjectId(this.projectId).subscribe(res => {
      this.userId = res;
      console.log('User ID fetched:', this.userId);
      this.taskForm.patchValue({ userId: this.userId });
    }, error => {
      console.error('Error fetching user ID:', error);
    });
  }
  ngOnInit(): void {
    this.projectId = +this.route.snapshot.paramMap.get('projId')!;
    this.getUserId();

    
    this.taskForm = this.fb.group({
      task_no: [this.task.task_no, Validators.required],
      title: [this.task.title, Validators.required],
      task_start_date: [this.task.task_start_date, Validators.required],
      task_created_date: [this.task.task_created_date],
      task_update_date: [this.task.task_update_date],
      task_end_date: [this.task.task_end_date],
      task_status: [this.task.task_status],
      task_assigne: [this.task.task_assigne],
      task_description: [this.task.task_description],
      task_comments: [this.task.task_comments],
      task_reported: [this.task.task_reported],
      userId: [this.userId], // This will be patched after userId is fetched
      projId: [this.projectId, Validators.required]
    });
  }

  createTask(): void {
    if (this.projectId && this.userId && this.taskForm.valid) {
      const taskRequest = {
        // task: this.task,
        task: this.taskForm.value,
        projId: this.projectId,
        userId: this.userId
      };
      this.taskService.createTask(taskRequest).subscribe(response => {
        // this.userId = response;
        console.log('Task created successfully:', response);
        alert("Task created successfully")
      }, error => {
        console.error('Error creating task:', error);
      });
      
    } else {
      console.error('Project ID and User ID are required :',Error);
      // alert("Project ID and User ID are required :",Error)
    }
  }

  onCancel(){
    this.taskForm.reset();
    this.router.navigate(['/project-list']);
  }

}