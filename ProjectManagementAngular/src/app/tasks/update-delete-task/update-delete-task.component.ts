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
  ngOnInit(): void {
    this.id = this.project.id;
    this.name = this.project.name;
    this.detail = this.project.detail;
  }
  addUser() {
    console.log("test add user");
    var val = { id: this.id, name: this.name, detail: this.detail };
    this.service.addTask(val).subscribe(res => { alert("Added Success"); });
  }

  updateProject() {
    var val = { id: this.id, name: this.name, detail: this.detail };
    this.service.updateTask(val).subscribe(res => { alert("Update Success"); });
  }
}