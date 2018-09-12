import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme/services/theme.service';
import { NbSidebarService } from '@nebular/theme/components/sidebar/sidebar.service';
import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  items2: NbMenuItem[] = [
    {
      title: 'home',
      link: '/'
    },
    {
      title: 'dashboard',
      link: 'dashboard'
    }
  ];

  items = [
    {
      title: 'Profile',
      expanded: false,
      children: [
        {
          title: 'Change Password',
          link: [], // goes into angular `routerLink`
        },
        {
          title: 'Privacy Policy',
          ulr: '#', // goes directly into `href` attribute
        },
        {
          title: 'Logout',
          link: [],
        },
      ],
    },
    {
      title: 'Shopping Bag',
      link: [],
    },
    {
      title: 'Orders',
      link: [],
    },
  ];

  constructor(
    private themeService: NbThemeService,
    private sidebarService: NbSidebarService
  ) {
    this.themeService.changeTheme('default');
  }

  ngOnInit() {
  }

  toggle() {
    this.sidebarService.toggle(true);
  }

  // change to dark
  enableDarkTheme() {
    this.themeService.changeTheme('cosmic'); // change to cosmic
    this.themeService.changeTheme('corporate'); // change to corporate
    this.themeService.changeTheme('dark'); // change to own custom theme dark
    this.themeService.changeTheme('default-2'); // change to own custom theme default-2
  }
}
