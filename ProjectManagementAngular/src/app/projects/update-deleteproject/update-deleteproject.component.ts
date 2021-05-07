import { Component, OnInit, Input } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-update-deleteproject',
  templateUrl: './update-deleteproject.component.html',
  styleUrls: ['./update-deleteproject.component.css']
})
export class UpdateDeleteprojectComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() project: any;
  id: number;
  name: string;
  detail: string;
  createdOn: Date;
  ngOnInit(): void {
    this.id = this.project.id;
    this.name = this.project.name;
    this.detail = this.project.detail;
    this.createdOn = this.project.createdOn;
  }
  addProject() {
    console.log("test add user");
    var val = { id: this.id, name: this.name, detail: this.detail, createdOn: "2021-05-07" };
    this.service.addProject(val).subscribe(res => { alert("Added Success"); });
  }

  updateProject() {
    var val = { id: this.id, name: this.name, detail: this.detail };
    this.service.updateProject(val).subscribe(res => { alert("Update Success"); });
  }
}
