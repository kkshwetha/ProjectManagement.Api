import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private service: SharedService) {

  }
  tasksList: any[];
  ngOnInit(): void {
    this.refreshTasksList();
  }
  refreshTasksList() {
    this.service.getTasksList().subscribe(data => {
      this.tasksList = data;
    });
  }
}
