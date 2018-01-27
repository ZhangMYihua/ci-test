import { Component } from '@angular/core';

@Component({
  selector: 'yz-navigation-bar',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationBarComponent {
  routes = [
    {
      label: 'Blog',
      routerLink: '/blog'
    },
    {
      label: 'Contact',
      routerLink: '/contact',
    },
  ];

  trackByFn = index => index;
}
