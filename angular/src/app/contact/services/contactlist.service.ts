import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Contact } from '../../models';


@Injectable()
export class ContactlistService {
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(
    private http: Http
  ) { }

  public getContact(id: number): Observable<Contact> {
    return this.http.get(`/api/contacts/${id}`)
      .map(res => res.json().data)
      .catch(e => e.json());
  }

  public getContactsList(): Observable<Array<Contact>> {
    return this.http.get('/api/contacts')
      .map(res => res.json().data)
      .catch(e => e.json());
  }

  public updateContact(id: string | number, newContact: Contact): Observable<Contact> {
    return this.http.put(
      `api/contacts/${id}`,
      JSON.stringify(newContact),
      this.headers
    ).map(() => newContact)
      .catch(err => Observable.of(err.json()));
  }

  public createContact(newContact: Contact): Observable<Contact> {
    return this.http.post(
      'api/contacts',
      JSON.stringify(newContact),
      this.headers
    ).map(() => newContact)
      .catch(err => Observable.of(err.json()));
  }


  public deleteContact(id: string | number): Observable<null> {
    return this.http.delete(
      `api/contacts/${id}`,
      this.headers
    ).map(() => null);
  }
}
