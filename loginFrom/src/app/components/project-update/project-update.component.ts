import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects/projects.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Project } from '../models/Project';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';
import { AppRoutingModule } from '../../app.routes';

@Component({
  selector: 'app-project-update',
  standalone: true,
  imports: [FormsModule, CommonModule, LayoutComponent, RouterModule, RouterLink, RouterLinkActive,AppRoutingModule,ReactiveFormsModule],
  templateUrl: './project-update.component.html',
  styleUrl: './project-update.component.css'
})
export class ProjectUpdateComponent  {
  // projectForm!: FormGroup;
  // projectId!: number;

  // constructor(
  //   private route: ActivatedRoute,
  //   private router: Router,
  //   public fb: FormBuilder,
  //   private projectService: ProjectsService
  // ) {}

  // ngOnInit(): void {
  //   this.projectId = +this.route.snapshot.paramMap.get('id')!;
  //   this.projectForm = this.fb.group({
  //     proj_name: ['', Validators.required],
  //     proj_owner: ['', Validators.required],
  //     proj_created_date: ['', Validators.required],
  //     proj_description: ['']
  //   });

  //   this.loadProject();
  // }

  // loadProject(): void {
  //   this.projectService.getProjectById(this.projectId).subscribe(
  //     (project: Project) => {
  //       this.projectForm.patchValue(project);
  //     },
  //     error => {
  //       console.error('Error loading project', error);
  //     }
  //   );
  // }

  // onSubmit(): void {
  //   if (this.projectForm.valid) {
  //     this.projectService.updateProject(this.projectId, this.projectForm.value).subscribe(
  //       () => {
  //         this.router.navigate(['/project-list']); // Redirect to project list or another page
  //       },
  //       error => {
  //         console.error('Error updating project', error);
  //       }
  //     );
  //   }
  // }


  // projectId : any;

  // constructor(private route: ActivatedRoute) {}

  // ngOnInit(): void {
  //   // Fetch the id from the route
  //   // this.projectId = this.route.snapshot.paramMap.get('id');
  //   console.log('Project ID:', this.projectId);

    // Now you can use this ID to fetch project details from an API
  // }
}
