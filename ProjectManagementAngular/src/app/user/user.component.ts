import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service: SharedService) { console.log("test"); }
  //constructor(private http: HttpClient) { console.log("test"); }

  // usersList: any[];
  // Modaltitle: string;
  // ActivateAddEditUser: boolean;
  // dep: any;
  ngOnInit() {

    // this.refreshUsersList();
  }

  // addClick() {
  //   console.log("modal");
  //   this.dep = { id: 0, firstName: "" };
  //   this.Modaltitle = "Add User";
  //   this.ActivateAddEditUser = true;
  // }

  // closeClick() {
  //   this.ActivateAddEditUser = false;
  //   this.refreshUsersList();
  // }
  // refreshUsersList() {
  //   this.service.getUserList().subscribe(data => {
  //     this.usersList = data;
  //   });
  // }
}


