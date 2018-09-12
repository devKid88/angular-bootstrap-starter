import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-bootstrap-starter';

  constructor(
    private themeService: NbThemeService
  ) {
    this.themeService.changeTheme('default');
  }

  // change to dark
  enableDarkTheme() {
    this.themeService.changeTheme('cosmic'); // change to cosmic
    this.themeService.changeTheme('dark'); // change to own custom theme dark
    this.themeService.changeTheme('default-2'); // change to own custom theme default-2
  }
}
