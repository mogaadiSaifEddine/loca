import { Component } from '@angular/core';
import { MenuItem } from './models/UI.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuItems: MenuItem[] = [
    {
      path: '#',
      icon: 'bi-list',
    },

    {
      path: '/',
      icon: 'bi-house',
    },
    {
      path: '/projects/add',
      icon: 'bi-plus-circle',
    },
    {
      path: '/projects',
      icon: 'bi-stack',
    },

    {
      path: '/',
      icon: 'bi-phone',
    },
    {
      path: '/',
      icon: 'bi-controller',
    },
    {
      path: '/',
      icon: 'bi-headset',
    },
    {
      path: '/',
      icon: 'bi-question-octagon-fill',
      isBordered: true,
    },
  ];
  title = 'locatifytest';
}
