import { Component, OnInit } from '@angular/core';
import { Project } from '../models/Project';
import { ProjectsService } from '../projects/projects.service';
import { FormsModule, NgForm } from '@angular/forms';
import { LayoutComponent } from '../layout/layout.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-save',
  standalone: true,
  imports: [FormsModule,LayoutComponent,RouterModule],
  templateUrl: './project-save.component.html',
  styleUrl: './project-save.component.css'
})
export class ProjectSaveComponent implements OnInit {

  project: Project = {
    proj_id: 0,
    proj_name: '',
    proj_owner: '',
    proj_created_date: new Date,
    proj_description: '',
    user: {
      user_id: 0,
      username: '',
      email: '',
      password: '',
      project: [],
      task: []
    },
    task: []
  };

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    const userId = this.project.user.user_id;
    this.projectService.saveProject(userId,this.project).subscribe(response => {
      console.log('Project saved successfully!', response);
      alert("project saved successfully")
      form.resetForm();
    }, error => {
      console.error('Error saving project!', error);
    });
  }
}
