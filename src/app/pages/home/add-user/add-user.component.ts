import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUSerComponent implements OnInit {
  fg!: FormGroup;
  genders: string[] = ['Woman', 'Man'];
  constructor(private fb: FormBuilder) {}
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
      status: [''],
    });
  }
}
