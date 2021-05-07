import { Component, OnInit, } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  constructor(private service: SharedService) { console.log("test"); }
  //constructor(private http: HttpClient) { console.log("test"); }

  usersList: any[];
  Modaltitle: string;
  ActivateAddEditUser: boolean = false;
  dep: any;
  ngOnInit() {

    this.refreshUsersList();
  }

  addClick() {
    console.log("modal");
    this.dep = { id: 0, firstName: "" };
    this.Modaltitle = "Add/Edit User";
    this.ActivateAddEditUser = true;
  }

  closeClick() {
    this.ActivateAddEditUser = false;
    this.refreshUsersList();
  }
  refreshUsersList() {
    this.service.getUserList().subscribe(data => {
      this.usersList = data;
    });
  }
  editClick(item: any) {
    this.dep = item;
    this.Modaltitle = "Edit User";
    console.log(this.Modaltitle);
    this.ActivateAddEditUser = true;
    console.log("edit odule");


  }

  deleteClick(item: any) {
    if (confirm('Are You Sure?')) {
      this.service.deleteUser(item.id).subscribe(data => { alert("Delete Success") })

    }
    this.refreshUsersList();
  }
}
