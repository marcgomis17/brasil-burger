import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Roles } from '../services/roles';

@Component({
  selector: 'mog-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";
  user: any;

  constructor(private _auth: AuthenticationService, private _router: Router) { }

  ngOnInit(): void { }

  login() {
    this._auth.login(this.email, this.password).subscribe();
    this.redirectUser();
  }

  redirectUser() {
    setTimeout(() => {
      this.user = this._auth.getUser();
      if (this._auth.getUser().roles[0] === Roles.client) {
        this._router.navigateByUrl('/client/catalogues');
      }
      if (this._auth.getUser().roles[0] === Roles.admin) {
        this._router.navigateByUrl('/admin');
      }
    }, 1000);
  }
}