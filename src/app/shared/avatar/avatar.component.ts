import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'mog-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  userAcronym: string = "";
  private _user: User | undefined = undefined;

  constructor(private _auth: AuthenticationService) { }

  ngOnInit(): void {
    this._user = this._auth.getUser() as User;
    this.userAcronym = (this._user.prenom.charAt(0) + this._user.nom.charAt(0)).toUpperCase();
  }
}
