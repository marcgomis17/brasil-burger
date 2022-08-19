import { Component, Input, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import { Roles } from 'src/app/authentication/services/roles';
import { User } from '../models/user';
import { AdressService } from '../services/adress.service';

@Component({
  selector: 'mog-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  @Input() orders: [] = [];
  @Input() statusFilterValue: string | undefined = "En cours";
  zones$: Observable<any> | undefined = undefined;
  dateFilterValue: string = "";
  zoneFilterValue: number = 0;
  user: User | any;
  roles: Roles | any;
  orderFilter: string = "";

  constructor(private _auth: AuthenticationService, private _adress: AdressService) { }

  ngOnInit(): void {
    this.user = this._auth.getUser();
    this.zones$ = this._adress.getLocations();
  }

  getStatusFilterValue(select: any) {
    this.statusFilterValue = select.target.value;
  }

  getDateFilterValue(select: any) {
    this.dateFilterValue = select.target.value;
  }

  getZoneFilterValue(select: any) {
    this.zoneFilterValue = parseInt(select.target.value);
  }
}
