import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: any;
  password: any;
  showError: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'rezaunbin' && this.password === '16210019') {
      this.showError = false;
      this.router.navigateByUrl('/app');
    } else {
      this.showError = true;
      this.errorMessage = 'Invalid login';
    }
    if (this.username === 'hilmanunbin' && this.password === '16210018') {
      this.showError = false;
      this.router.navigateByUrl('/app');
    } else {
      this.showError = true;
      this.errorMessage = 'Invalid login';
    }
    if (this.username === 'alwinunbin' && this.password === '16210017') {
      this.showError = false;
      this.router.navigateByUrl('/app');
    } else {
      this.showError = true;
      this.errorMessage = 'Invalid login';
    }
    if (this.username === 'taufanunbin' && this.password === '16210016') {
      this.showError = false;
      this.router.navigateByUrl('/app');
    } else {
      this.showError = true;
      this.errorMessage = 'Invalid login';
    }
  }
}
