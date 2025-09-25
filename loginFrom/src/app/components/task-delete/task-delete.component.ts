import { Component } from '@angular/core';
import { LayoutComponent } from "../layout/layout.component";
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-delete',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './task-delete.component.html',
  styleUrl: './task-delete.component.css'
})
export class TaskDeleteComponent {

  
}
