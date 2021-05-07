import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-update-delete-user',
  templateUrl: './update-delete-user.component.html',
  styleUrls: ['./update-delete-user.component.css']
})
export class UpdateDeleteUserComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() dep: any;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  ngOnInit(): void {
    this.id = this.dep.id;
    this.firstName = this.dep.firstName;
    this.lastName = this.dep.lastName;
    this.email = this.dep.email;
  }
  addUser() {
    console.log("test add user");
    var val = { id: this.id, firstName: this.firstName, lastName: this.lastName, email: this.email };
    this.service.addUser(val).subscribe(res => { alert("Added Success"); });
  }

  updateUser() {
    var val = { id: this.id, firstName: this.firstName, lastName: this.lastName, email: this.email };
    this.service.updateUser(val).subscribe(res => { alert("Update Success"); });
  }
}

