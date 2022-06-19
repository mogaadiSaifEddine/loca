import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/models/New.model';
import { User } from 'src/app/models/User.model';
import { NewsService } from 'src/app/services/news.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  usersList: User[] = [];
  news: News[] = [];
  loading = false;
  constructor(
    private router: Router,
    private userService: UserService,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.getNews();
  }
  // get users list

  getUsers() {
    this.loading = true;
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
      this.loading = false;
      this.usersList = data;
    });
  }
  getNews() {
    this.loading = true;
    this.newsService.getNews().subscribe((data) => {
      console.log(data.data);
      this.loading = false;
      this.news = data.data;
    });
  }
  goToaddUSerPage() {
    this.router.navigate(['/show-user']);
    console.log('go to add user page');
  }
}
