import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './tasks/new-taskcomponent/new-taskcomponent.component';
import { UpdateDeleteTaskComponent } from './tasks/update-delete-task/update-delete-task.component';
import { NewprojectComponent } from './projects/newproject/newproject.component';
import { UpdateDeleteprojectComponent } from './projects/update-deleteproject/update-deleteproject.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { UpdateDeleteUserComponent } from './user/update-delete-user/update-delete-user.component';
import { LoginComponent } from 'src/app/login/login.component'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProjectsComponent,
    TasksComponent,
    NewTaskComponent,
    UpdateDeleteTaskComponent,
    NewprojectComponent,
    UpdateDeleteprojectComponent,
    NewUserComponent,
    UpdateDeleteUserComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
