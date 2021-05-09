import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  app_name = 'S-Shoppeeee';
  constructor(private router: Router) {

  }
  setActive(value: string) {
    console.log(this.router.url)
    if (this.router.url.indexOf(value) > 0) {
      return true;
    }
    else {
      return false;
    }
  }
}
