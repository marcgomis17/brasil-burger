import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../authentication/services/authentication.service";
import { User } from "../shared/models/user";

@Component({
    selector: 'admin-component',
    templateUrl: './admin-component.html',
    styleUrls: ['./admin-component.scss'],
})
export class AdminComponent implements OnInit {
    userName: string = "";
    private _user: User | undefined;

    constructor(private _auth: AuthenticationService) { }

    showUserMenu() {
        // TODO: Show user menu
        console.log('clicked');
    }

    ngOnInit(): void {
        this._user = this._auth.getUser() as User;
        this.userName = `${this._user.prenom} ${this._user.nom}`;
    }
}