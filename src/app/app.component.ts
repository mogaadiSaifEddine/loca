import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { pageFadeAnimation } from './fe-animations';
import { MenuItem } from './models/UI.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [pageFadeAnimation],
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
      path: 'show-user',
      icon: 'bi-plus-circle',
    },
    {
      path: '/users-list',
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

  constructor(private readonly contexts: ChildrenOutletContexts) {}
  getRouteData() {
    return this.contexts.getContext('primary')?.route?.data;
  }
}
