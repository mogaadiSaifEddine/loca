import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/models/New.model';
import { PreTemplate } from 'src/app/models/Template.model';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss'],
})
export class ShowUserComponent implements OnInit {
  usersList: User[] = [];
  loading = false;
  seeAllBoolean = false;
  news: News[] = [];
  preBuiltTemplates: PreTemplate[] = this.userService.templates;
  constructor(private userService: UserService, private router: Router) {}
  sliceNumber = 6;
  ngOnInit(): void {
    console.log(this.preBuiltTemplates);
    this.getAllUsers();
  }
  getAllUsers() {
    this.loading = true;
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
      this.loading = false;
      this.usersList = data;
    });
  }
  seeAll() {
    this.sliceNumber = !this.seeAllBoolean ? this.usersList.length : 6;

    this.seeAllBoolean = !this.seeAllBoolean;
  }
  goToaddUSerPage() {
    this.router.navigate(['/add-user']);
    console.log('go to add user page');
  }
}
