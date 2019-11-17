import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ChildActivationStart, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  message: string = '';
  userName: string;
  password: string;
  // tslint:disable-next-line: max-line-length
  constructor(private userService: UserService, private authService: AuthService, private cookieService: CookieService, private router: Router) {}
  login() {
    this.userService.login(this.userName, this.password).subscribe( res => {
      console.log(res);
      if (res.errorCode === 0) {
        this.message = '';
        // save user info, then redirect to dashboard
        this.cookieService.set('userInfo', JSON.stringify(res.data));
        this.cookieService.set('token', res.data.token);
        this.authService.setLoggedIn(true);
        this.router.navigate(['/dashboard']);
      } else {
        this.message = res.message;
      }
    });
  }
 }
