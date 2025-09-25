import { Component, OnInit , NgModule} from '@angular/core';
import { Project } from '../models/Project';
import { ProjectsService } from '../projects/projects.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from "../layout/layout.component";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [FormsModule, CommonModule, LayoutComponent, RouterModule,  RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit {
  projects:Project[]=[];
 user: any;
  http: any;
  selectedProject: Project | null = null;
  constructor(private projectService: ProjectsService,public router:Router) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((data:any) => {
      this.projects = data;
     
    });

  }

  
  // Navigate to the update page for the selected project
  editProject(id: number) {
    console.log(id);
    this.router.navigate(['/project-update1',id]);
    // this.router.navigate(['/project-update',id]); // Route to update component with project ID
  }

  selectProject(project: Project) {
    this.selectedProject = { ...project };
  }

  updateProject(form: NgForm) {
    if (this.selectedProject) {
      this.projectService.updateProject(this.selectedProject.proj_id, this.selectedProject)
        .subscribe(updatedProject => {
          this.selectedProject = null;
          this.ngOnInit();  // Refresh project list after update
        });
    }
  }
  
  toTaskList(projId: number) {
    console.log(projId);
    this.router.navigate(['/task-list',projId]);
    // this.router.navigate(['/project-update',id]); // Route to update component with project ID
  }

  toCreateTask(projId: number) {
    console.log(projId);
    this.router.navigate(['/task-save',projId]);
    // this.router.navigate(['/project-update',id]); // Route to update component with project ID
  }

}
