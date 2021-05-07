import { Component, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css']
})
export class ShowProjectComponent implements OnInit {

  constructor(private service: SharedService) { }


  projectsList: any[];
  Modaltitle: string;
  ActivateAddEditUser: boolean = false;
  project: any;
  ngOnInit(): void {
    this.refreshProjectList();
  }
  refreshProjectList() {
    this.service.getProjectList().subscribe(data => {
      this.projectsList = data;
    });
  }

  addClick() {
    console.log("modal");
    this.project = { id: 0, firstName: "" };
    this.Modaltitle = "Add/Edit Project";
    this.ActivateAddEditUser = true;
  }

  closeClick() {
    this.ActivateAddEditUser = false;
    this.refreshProjectList();
  }

  editClick(item: any) {
    this.project = item;
    this.Modaltitle = "Edit Project";
    console.log(this.Modaltitle);
    this.ActivateAddEditUser = true;
    console.log("edit odule");


  }

  deleteClick(item: any) {
    if (confirm('Are You Sure?')) {
      this.service.deleteProject(item.id).subscribe(data => { alert("Delete Success") })
      this.refreshProjectList();
    }
    this.refreshProjectList();
  }
}
