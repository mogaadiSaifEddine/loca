import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  columns = [
    { name: 'Name' },
    { name: 'Email' },
    { name: 'status' },
    { name: 'Gender' },
    { name: 'Actions' },
  ];

  tabsElements = [
    {
      title: 'All Users',
      active: true,
      link: '',
      disabled: false,
    },
    {
      title: 'Outdated Users',
      active: false,
      link: '',
      disabled: true,
    },
    {
      title: 'Active Users',
      active: false,
      link: '',
      disabled: true,
    },
    {
      title: 'Inactive Users',
      active: false,
      link: '',
      disabled: true,
    },
  ];
  actions = [
    {
      name: 'Edit',
      action: (user: User) => {
        this.goToEditPage(user);
      },

      buttonClass: 'btn btn-secondary',
      icon: ' bi-pencil',
    },
    {
      name: 'Delete',
      action: (user: User) => {
        this.deleteUser(user.id);
      },
      buttonClass: 'btn btn-danger',
      icon: ' bi-trash',
    },
  ];
  configButtons = [
    {
      name: 'Export',
      action: 'some Thing To do ',
    },
    {
      name: 'Publish',
      action: 'some Thing To do ',
    },
    {
      name: 'Delete',
      action: 'some Thing To do ',
    },
  ];

  users: User[] = [];
  shownUsers: User[] = [];

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      this.shownUsers = users;
    });
  }
  deleteUser(id: number) {
    if (confirm('Are you sure you want to delete this user?'))
      this.userService.deleteUser(id).subscribe(
        () => {
          this.getAllUsers();
          this.toastr.success('User Deleted Successfully');
        },
        (err) => {
          this.toastr.error(err.error.message);
        }
      );
  }
  goToEditPage(user: User) {
    this.userService.userToUpdate = user;

    this.router.navigate(['/add-user']);
  }
  search(text: any) {
    this.shownUsers = this.users.filter(
      (user) =>
        user.name.includes(text.target.value) ||
        user.email.includes(text.target.value) ||
        user.status.includes(text.target.value) ||
        user.gender?.includes(text.target.value)
    );
  }
}
