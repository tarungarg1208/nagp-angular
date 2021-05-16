import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationGuard } from '../services/authentication.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private router: Router, private authenticationGuard: AuthenticationGuard) {
  }
  ngOnInit(): void {
  }
  login_user() {
    const form_data = this.userForm;
    if (form_data.valid) {
      let user = form_data.get('username')?.value;
      var pass = form_data.get('password')?.value;
      console.log(form_data.get('username')?.value);
      //Validate username and password here
      var valid = true;
      if (this.authenticationGuard.login(user, pass)) {
        this.router.navigate(['/product']);
      }
      else {
        console.log("Unable to Login, Please check the username and password")
      }
    }
    else{
      console.error("Form contents are invalid")
    }
  }
}
