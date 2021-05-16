import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  app_name = 'S-Shop';
  constructor(private router: Router) {

  }
  setActive(value: string) {
    if (this.router.url.indexOf(value) > 0) {
      return true;
    }
    else {
      return false;
    }
  }
}
