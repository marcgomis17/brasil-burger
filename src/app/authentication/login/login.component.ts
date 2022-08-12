import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'mog-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";

  constructor(private _authService: AuthenticationService, private _router: Router) { }

  ngOnInit(): void { }

  login() {
    try {
      this._authService.login(this.email, this.password).subscribe(res => {
        if (res) {
          let token = res.token;
          localStorage.setItem("token", token);
          this._router.navigateByUrl('/client/catalogues');
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}
