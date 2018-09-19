import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { Contact } from '../../models/';
import { ContactlistService } from './contactlist.service';

@Injectable()
export class ContactResolver implements Resolve<Contact> {
  constructor(
    private contactListSvc: ContactlistService,
    private router: Router
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Contact> {
    const id = Number(route.paramMap.get('id'));

    return this.contactListSvc.getContact(id).map(data => {
      if (data) {
        return data;
      }
      this.router.navigate(['/contacts']);
      return null;
    });
  }
}