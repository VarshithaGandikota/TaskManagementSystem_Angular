import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from "../layout/layout.component";
import { Task } from '../models/Task';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-task-view',
  standalone: true,
  imports: [LayoutComponent,FormsModule,CommonModule,HttpClientModule],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.css'
})
export class TaskViewComponent implements OnInit{
  task: Task | undefined;
  taskNo!: string;
  projId!:string;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.taskNo = this.route.snapshot.paramMap.get('taskNo')!;
    this.projId=this.route.snapshot.paramMap.get('proj_id')!;
    this.getTaskDetails();
  }

  getTaskDetails(): void {
    this.taskService.getTaskByTaskNo(this.taskNo).subscribe(task => {
      this.task = task;
    });
  }

  onBack(){
    console.log(this.projId);
    
    this.router.navigate(['/task-list',this.projId]);
  }
}
