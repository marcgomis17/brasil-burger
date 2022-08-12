import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'mog-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  passwordErrorMsg: string = "";
  registerForm: FormGroup = new FormGroup({});

  constructor(private _authService: AuthenticationService, private _formBuilder: FormBuilder, private _router: Router) {
    this.registerForm = this._formBuilder.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.minLength(6)],
      confirmPassword: ['', Validators.required],
      adresse: ['', Validators.required],
      telephone: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  register() {
    try {
      if (this.registerForm.valid) {
        if (this.registerForm.controls['password'].value !== this.registerForm.controls['confirmPassword'].value) {
          this.passwordErrorMsg = "Les mots de passe ne correspondent pas";
        } else {
          this._authService.register(this.registerForm.value).subscribe(res => {
            if (res) {
              this._router.navigateByUrl('/clients/panier');
            }
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
}
