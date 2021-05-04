import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { UserComponent } from 'src/app/user/user.component';
import { ProjectsComponent } from 'src/app/projects/projects.component';
import { TasksComponent } from 'src/app/tasks/tasks.component';

const routes: Routes = [
  { path: "Home", component: LoginComponent },
  { path: "user", component: UserComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "tasks", component: TasksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
