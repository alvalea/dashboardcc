import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  message: string;
  form: UntypedFormGroup;

  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: UntypedFormBuilder) {
	  this.message = this.getMessage();
	  this.form = this.formBuilder.group({
		  username: [""],
		  password: [""],
	  });
  }

  getMessage() {
    return 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  submit() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.message = this.getMessage();
      if (this.authService.isLoggedIn) {
        const redirectUrl = '/dashboard';

        // Redirect the user
        this.router.navigate([redirectUrl]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.message = this.getMessage();
  }
}
