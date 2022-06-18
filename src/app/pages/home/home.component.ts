import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  usersList: User[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }
  // get users list

  getUsers() {
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
      this.usersList = data;
    });
  }
}
