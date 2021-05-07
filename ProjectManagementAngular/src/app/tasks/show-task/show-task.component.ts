import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {

  constructor(private service: SharedService) { }


  tasksList: any[];
  Modaltitle: string;
  ActivateAddEditUser: boolean = false;
  project: any;
  ngOnInit(): void {
    this.refreshTasksList();
  }
  refreshTasksList() {
    this.service.getTasksList().subscribe(data => {
      this.tasksList = data;
    });
  }

  addClick() {
    console.log("modal");
    this.project = { id: 0, detail: "", name: "", status: 0 };
    this.Modaltitle = "Add/Edit Task";
    this.ActivateAddEditUser = true;
  }

  closeClick() {
    this.ActivateAddEditUser = false;
    this.refreshTasksList();
  }

  editClick(item: any) {
    this.project = item;
    this.Modaltitle = "Edit User";
    console.log(this.Modaltitle);
    this.ActivateAddEditUser = true;
    console.log("edit odule");


  }

  deleteClick(item: any) {
    if (confirm('Are You Sure?')) {
      this.service.deleteTask(item.id).subscribe(data => { alert("Delete Success") })

    }
    this.refreshTasksList();
  }
}

