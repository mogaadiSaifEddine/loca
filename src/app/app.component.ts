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
    { name: '', path: '#', icon: 'bi-list' },

    { name: 'Home', path: '/', icon: 'bi-house' },
    { name: 'Add User', path: 'show-user', icon: 'bi-plus-circle' },
    { name: 'Users', path: '/users-list', icon: 'bi-stack' },

    { name: '', path: '/', icon: 'bi-phone' },
    { name: '', path: '/', icon: 'bi-controller' },
    { name: '', path: '/', icon: 'bi-headset' },
    { name: '', path: '/', icon: 'bi-question-octagon-fill', isBordered: true },
  ];
  title = 'locatifytest';

  constructor(private readonly contexts: ChildrenOutletContexts) {}
  getRouteData() {
    return this.contexts.getContext('primary')?.route?.data;
  }
}
