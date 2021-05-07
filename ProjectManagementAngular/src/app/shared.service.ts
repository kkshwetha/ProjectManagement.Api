import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:56622/api";
  constructor(private http: HttpClient) { }
  getUserList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/user')
  }

  addUser(val: any) {
    return this.http.post(this.APIUrl + '/user', val);

  }
  updateUser(val: any) {
    return this.http.put(this.APIUrl + '/user', val);

  }
  deleteUser(val: any) {
    return this.http.delete(this.APIUrl + '/user/' + val);

  }
  getProjectList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/project')
  }

  getTasksList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/task')
  }
  addProject(val: any) {
    return this.http.post(this.APIUrl + '/project', val);

  }
  updateProject(val: any) {
    return this.http.put(this.APIUrl + '/project', val);

  }
  deleteProject(val: any) {
    return this.http.delete(this.APIUrl + '/project/' + val);

  }
  addTask(val: any) {
    return this.http.post(this.APIUrl + '/task', val);

  }
  updateTask(val: any) {
    return this.http.put(this.APIUrl + '/task', val);

  }
  deleteTask(val: any) {
    return this.http.delete(this.APIUrl + '/task/' + val);

  }
}
