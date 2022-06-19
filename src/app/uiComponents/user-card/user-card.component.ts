import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/models/New.model';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input()
  imgUrl!: string;
  @Input()
  status!: string;
  @Input()
  name!: string;

  constructor() {}

  ngOnInit(): void {
    // console.log(typeof this.data);
  }
}
