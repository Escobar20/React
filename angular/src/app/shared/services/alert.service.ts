import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AlertService {

  constructor() { }

  private _message = new BehaviorSubject<string>('');
  public message$ = this._message.asObservable();

  private _context = new BehaviorSubject<string>('');
  public context$ = this._context.asObservable();

  error(message: string) {
    this._context.next('alert-danger');
    this._message.next(message);
  }
  success(message: string) {
    this._context.next('alert-success');
    this._message.next(message);
  }
  close() {
    this._message.next('');
  }
}
