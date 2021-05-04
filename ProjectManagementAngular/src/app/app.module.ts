import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsercomponentComponent } from './usercomponent/usercomponent.component';
import { ProjectscomponentComponent } from './projectscomponent/projectscomponent.component';
import { TaskscomponentComponent } from './taskscomponent/taskscomponent.component';
import { NewTaskcomponentComponent } from './taskscomponent/new-taskcomponent/new-taskcomponent.component';
import { UpdateDeleteTaskcomponentComponent } from './taskscomponent/update-delete-taskcomponent/update-delete-taskcomponent.component';
import { NewprojectComponentComponent } from './projectscomponent/newproject-component/newproject-component.component';
import { UpdateDeleteprojectComponentComponent } from './projectscomponent/update-deleteproject-component/update-deleteproject-component.component';
import { NewUserComponentComponent } from './usercomponent/new-user-component/new-user-component.component';
import { UpdateDeleteUserComponentComponent } from './usercomponent/update-delete-user-component/update-delete-user-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UsercomponentComponent,
    ProjectscomponentComponent,
    TaskscomponentComponent,
    NewTaskcomponentComponent,
    UpdateDeleteTaskcomponentComponent,
    NewprojectComponentComponent,
    UpdateDeleteprojectComponentComponent,
    NewUserComponentComponent,
    UpdateDeleteUserComponentComponent,
    LoginComponentComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
