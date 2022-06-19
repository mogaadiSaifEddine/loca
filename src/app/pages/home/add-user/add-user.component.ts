import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUSerComponent implements OnInit, OnDestroy {
  @Input()
  userData!: User | undefined;
  fg!: FormGroup;

  genders: string[] = ['male', 'female'];
  constructor(
    private fb: FormBuilder,
    private userSerivce: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.userData = this.userSerivce.userToUpdate;
    console.log(this.userSerivce.userToUpdate);

    this.initForm();
  }

  initForm() {
    this.fg = this.fb.group({
      id: [this.userData?.id],
      name: [this.userData?.name || ''],
      email: [this.userData?.email || ''],
      password: [''],
      phone: [''],
      address: [''],
      role: [''],
      gender: [this.userData?.gender || 'female'],
      status: [this.userData?.status || 'active'],
    });
  }
  toastNotworking() {
    this.toastr.error('Sorry! This Button Not Working Yet');
  }

  addUser() {
    console.log(this.fg.value);
    // add new user
    !this.userData
      ? this.userSerivce.addUser(this.fg.value).subscribe(
          (data) => {
            console.log(data);
            this.toastr.success('Add user success');
            this.initForm();
            this.router.navigate(['/show-user']);
          },

          (err) => {
            console.log(err);
            this.toastr.error('Add user failed');
          }
        )
      : // update user data
        this.userSerivce.updateUser(this.fg.value).subscribe(
          (data) => {
            console.log(data);
            this.toastr.success('Update user success');
            this.initForm();
            this.router.navigate(['/show-user']);
          },
          (err) => {
            console.log(err);
            this.toastr.error('Update user failed');
          }
        );
  }
  ngOnDestroy(): void {
    this.userSerivce.userToUpdate = undefined;
  }
}
