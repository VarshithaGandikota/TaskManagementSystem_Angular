import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectSaveComponent } from './components/project-save/project-save.component';
import { ProjectUpdateComponent } from './components/project-update/project-update.component';
import { ProjectUpdate1Component } from './components/project-update1/project-update1.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { TaskViewComponent } from './components/task-view/task-view.component';
import { TaskUpdateComponent } from './components/task-update/task-update.component';
import { TaskDeleteComponent } from './components/task-delete/task-delete.component';
import { TaskSaveComponent } from './components/task-save/task-save.component';

export const routes: Routes = [
    {path:'', redirectTo:'login',pathMatch:'full'},

    {
        path:'login' ,
         component:LoginComponent
        },

    {
        path:'', 
        component:LayoutComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent,
            }
        ],
        
        
    },
    {
        path:'user-signup',
        component:UserSignupComponent
    },
    {
        path:'projects',
        component:ProjectsComponent
    },
    {
        path:'project-list',
        component:ProjectListComponent
    },
    
    {
        path:'project-update/:id',
        component:ProjectUpdateComponent
    },
    {
        path:'project-update',
        component:ProjectUpdateComponent
    },
    {
        path:'project-save',
        component:ProjectSaveComponent
    },
   {
    path:'project-update1',
    component:ProjectUpdate1Component
   },
   {
    path:'project-update1/:id',
    component:ProjectUpdate1Component
   },

   {
    path:'task-list',
    component:TaskListComponent
   },
   {
    path:'task-list/:id',
    component:TaskListComponent
   },
   {
        path:'task-save',
        component:TaskSaveComponent
   },
   {
    path:'task-view',
    component:TaskViewComponent
   },
   {
    path:'task-view/:taskNo',
    component:TaskViewComponent
   },
   {
    path:'task-update',
    component:TaskUpdateComponent
   },
   {
    path:'task-delete',
    component:TaskDeleteComponent
   },
   { path: 'task-update/:proj_id/:taskId/:taskNo', 
    component: TaskUpdateComponent 
   },
   {
    path:'task-view/:proj_id/:taskNo',
    component:TaskViewComponent
   },
   {
    path:'task-list/:proj_id',
    component:TaskListComponent
   },
   {
    path:'task-save/:projId',
    component:TaskSaveComponent
},
{
    path:'task-delete/:taskId/:taskNo',
    component:TaskDeleteComponent
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
