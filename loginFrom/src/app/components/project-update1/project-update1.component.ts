import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Project } from '../models/Project';
import { ProjectsService } from '../projects/projects.service';
import { User } from '../models/User';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from '../layout/layout.component';


@Component({
  selector: 'app-project-update1',
  standalone: true,
  imports: [FormsModule,RouterModule,LayoutComponent],
  templateUrl: './project-update1.component.html',
  styleUrl: './project-update1.component.css'
})
export class ProjectUpdate1Component {
// projectId: any;

// constructor(private route: ActivatedRoute) { }

// ngOnInit(): void {
//   // Method 1: Using snapshot to get the id
//   this.projectId = this.route.snapshot.paramMap.get('id');
// }


project: Project = {
  proj_id: 0,
  proj_name: '',
  proj_owner: '',
  proj_created_date: new Date,
  proj_description: '',
  // user: {} as User,
  // task: []
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

constructor(
  private projectService: ProjectsService,
  private route: ActivatedRoute,
  private router: Router
) { }

ngOnInit(): void {
  const projectId = Number(this.route.snapshot.paramMap.get('id'));
  if (projectId) {
    this.loadProjectDetails(projectId);
  }
}

// Method to load project details
loadProjectDetails(id: number): void {
  this.projectService.getProjectById(id).subscribe({
    next: (data) => {
      this.project = data;
      console.log('Project loaded successfully:', data);
    },
    error: (error) => {
      console.error('Error loading project details:', error);
    }
  });
}

updateProject(): void {
  if (this.project.proj_id) {
    this.projectService.updateProject(this.project.proj_id, this.project)
      .subscribe({
        next: (response) => {
          // console.log('Project updated successfully!', response);
          alert("project updated successfully")
          this.router.navigate(['/project-list']);
        },
        error: (error) => {
          console.error('There was an error updating the project!', error);
        }
      });
  }
}
}
