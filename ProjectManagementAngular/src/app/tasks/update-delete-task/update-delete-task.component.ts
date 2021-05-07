import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-update-delete-task',
  templateUrl: './update-delete-task.component.html',
  styleUrls: ['./update-delete-task.component.css']
})
export class UpdateDeleteTaskComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() project: any;
  id: number;
  name: string;
  detail: string;
  assignedToUser: string;
  status: string;
  ngOnInit(): void {
    this.id = this.project.id;
    this.name = this.project.name;
    this.detail = this.project.detail;
    this.assignedToUser = this.project.assignedToUser.firstName;
    this.status = this.project.status;
  }
  addTask() {
    console.log("test add user");
    //var val = { id: this.id, name: this.project.name, detail: this.detail, status: this.status, assignedToUser: this.assignedToUser };
    var val = { id: this.id, name: this.project.name, detail: this.detail, status: this.status, assignedToUser: this.assignedToUser };

    this.service.addTask(val).subscribe(res => { alert("Added Success"); });
  }

  updateTask() {
    var val = { id: this.id, detail: this.detail, status: this.status, assignedToUser: this.assignedToUser };
    this.service.updateTask(val).subscribe(res => { alert("Update Success"); });
  }
}