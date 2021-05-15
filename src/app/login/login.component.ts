import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
  login_user(userForm: NgForm) {
    console.log(userForm.form);
    console.log("LOGGED IN SUCCESSFULLY")
    // console.log(JSON.stringify(userForm.value));
}
}
