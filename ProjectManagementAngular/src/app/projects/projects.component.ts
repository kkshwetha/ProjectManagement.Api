import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private service: SharedService) { }
  projectsList: any[];
  ngOnInit(): void {
    this.refreshProjectsList();
  }
  refreshProjectsList() {
    this.service.getProjectList().subscribe(data => {
      this.projectsList = data;
    });
  }
}
