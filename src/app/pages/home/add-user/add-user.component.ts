import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PreTemplate } from 'src/app/models/Template.model';
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
  preBuiltTemplates: PreTemplate[] = this.userSerivce.templates;
  genders: string[] = ['male', 'female'];
  constructor(
    private fb: FormBuilder,
    private userSerivce: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.userData = this.userSerivce.userToUpdate;

    this.initForm();
  }

  initForm() {
    this.fg = this.fb.group({
      id: [this.userData?.id],
      name: [this.userData?.name || '', Validators.required],
      email: [
        this.userData?.email || '',
        [Validators.required, Validators.email],
      ],

      gender: [this.userData?.gender || 'female', Validators.required],
      status: [this.userData?.status || 'active'],
    });
  }
  toastNotworking() {
    this.toastr.error('Sorry! This Button Not Working Yet');
  }

  addUser() {
    // add new user
    if (!this.fg.valid) {
      this.toastr.error('Please check again the fields');
      return;
    }
    !this.userData
      ? this.userSerivce.addUser(this.fg.value).subscribe(
          (data) => {
            this.toastr.success('Add user success');
            this.initForm();
            this.router.navigate(['/show-user']);
          },

          (err) => {
            this.toastr.error('Add user failed');
          }
        )
      : // update user data
        this.userSerivce.updateUser(this.fg.value).subscribe(
          (data) => {
            this.toastr.success('Update user success');
            this.initForm();
            this.router.navigate(['/show-user']);
          },
          (err) => {
            this.toastr.error('Update user failed');
          }
        );
  }
  ngOnDestroy(): void {
    this.userSerivce.userToUpdate = undefined;
  }
}
