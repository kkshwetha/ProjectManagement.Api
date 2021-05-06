import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { UserComponent } from 'src/app/user/user.component';
import { ProjectsComponent } from 'src/app/projects/projects.component';
import { TasksComponent } from 'src/app/tasks/tasks.component';
import { NewUserComponent } from "src/app/user/new-user/new-user.component";
import { NewprojectComponent } from "src/app/projects/newproject/newproject.component";
import { NewTaskComponent } from './tasks/new-taskcomponent/new-taskcomponent.component';
import { UpdateDeleteUserComponent } from "src/app/user/update-delete-user/update-delete-user.component";
import { UpdateDeleteTaskComponent } from "src/app/tasks/update-delete-task/update-delete-task.component";
import { UpdateDeleteprojectComponent } from "src/app/projects/update-deleteproject/update-deleteproject.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "user", component: UserComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "tasks", component: TasksComponent },
  { path: "newuser", component: NewUserComponent },
  { path: "newproject", component: NewprojectComponent },
  { path: "newtask", component: NewTaskComponent },
  { path: "updatedeleteuser", component: UpdateDeleteUserComponent },
  { path: "updatedeleteproject", component: UpdateDeleteprojectComponent },
  { path: "updatedeletetask", component: UpdateDeleteTaskComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
