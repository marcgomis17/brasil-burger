import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  prenom: FormControl = new FormControl();
  nom: FormControl = new FormControl();
  email: FormControl = new FormControl();
  password: FormControl = new FormControl();
  confirmPassword: FormControl = new FormControl();
  adresse: FormControl = new FormControl();
  phone: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
