import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from "../layout/layout.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-update',
  standalone: true,
  imports: [LayoutComponent,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './task-update.component.html',
  styleUrl: './task-update.component.css'
})
export class TaskUpdateComponent implements OnInit{
  taskForm!: FormGroup;
  taskId!: number;
  taskNo!: string;
  projId!:number;

  statuses: string[] = ['Open', 'In Progress', 'Ready For SIT', 'SIT Completed','Ready for SEQ','SEQ Completed','Ready for UAT','UAT Completed','Closed','Re-Open']; // List of task statuses


    // Filtered statuses to display in the dropdown
    filteredStatuses: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
    private fb: FormBuilder
  ) {
    this.taskForm = this.fb.group({
      title: [''],
      task_start_date: [''],
      task_update_date: [''],
      task_end_date: [''],
      task_status: [''],  // Bind this to the dropdown
      task_assigne: [''],
      task_description: [''],
      task_comments: [''],
      task_reported: ['']
    });
   }

  ngOnInit(): void {
    
    const currentTaskStatus = 'In Progress';
    this.filteredStatuses = this.getSequentialStatuses(currentTaskStatus);
    this.taskForm.patchValue({
      task_status: currentTaskStatus
    });
    this.taskForm.get('task_status')?.valueChanges.subscribe((newStatus: string) => {
      this.filteredStatuses = this.getSequentialStatuses(newStatus);
    });
    




    this.projId = +this.route.snapshot.paramMap.get('proj_id')!;
    this.taskId = +this.route.snapshot.paramMap.get('taskId')!;
    this.taskNo = this.route.snapshot.paramMap.get('taskNo')!;
    this.loadTaskDetails();
   
  }

  // Fetch task details and populate the form
  loadTaskDetails(): void {


    this.taskService.getTask(this.taskId, this.taskNo).subscribe(task => {
      this.taskForm.patchValue({
        title: task.title,
        task_start_date: task.task_start_date,
        task_update_date: task.task_update_date,
        task_end_date: task.task_end_date,
        task_status: task.task_status,
        task_assigne: task.task_assigne,
        task_description: task.task_description,
        task_comments: task.task_comments,
        task_reported: task.task_reported
      });
    });
  }

 
 getSequentialStatuses(currentStatus: string): string[] {
  // If "Re-Open" is selected, reset to initial statuses
  if (currentStatus === 'Re-Open') {
    return ['Open', 'In Progress', 'Re-Open'];
  }

  const currentIndex = this.statuses.indexOf(currentStatus);

  // Get the current status and next two statuses
  let sequentialStatuses = this.statuses.slice(currentIndex, currentIndex + 3);

  // Always add "Re-Open" if it's not already in the list
  if (!sequentialStatuses.includes('Re-Open')) {
    sequentialStatuses.push('Re-Open');
  }

  return sequentialStatuses;
}


  // Submit the updated task details
  onUpdate(): void {
    if (this.taskForm.valid) {
      this.taskService.updateTask(this.taskId, this.taskNo, this.taskForm.value)
        .subscribe(() => {
          this.router.navigate(['/task-list',this.projId]);
        });
        alert("task updated successfully")
    }
  }

  onCancel(){
    this.router.navigate(['/task-list',this.projId]);
  }
}
