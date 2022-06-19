import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUSerComponent implements OnInit {
  fg!: FormGroup;
  genders: string[] = ['Male', 'Female'];
  constructor(
    private fb: FormBuilder,
    private userSerivce: UserService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.fg = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      phone: [''],
      address: [''],
      role: [''],
      gender: ['Female'],
      status: ['active'],
    });
  }
  addUser() {
    console.log(this.fg.value);
    // add new user
    this.userSerivce.addUser(this.fg.value).subscribe(
      (data) => {
        console.log(data);
        this.toastr.success('Add user success');
      },

      (err) => {
        console.log(err);
        this.toastr.error('Add user failed');
      }
    );
  }
}
