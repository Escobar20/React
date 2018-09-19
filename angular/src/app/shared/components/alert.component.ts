import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { AlertService } from '../services/alert.service';


@Component({
  selector: 'app-alert',
  template: `
  <div *ngIf="(alertSvc.message$ | async)" [ngClass]="(alertSvc.context$ | async)" class="alert alert-dismissible" role="alert">
    <button type="button" class="close" (click)="close()" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    {{ (alertSvc.message$ | async ) }}
  </div>
  `
})
export class AlertComponent implements OnInit {
  constructor(
    private alertSvc: AlertService
  ) { }

  ngOnInit() {
  }

  close() {
    this.alertSvc.close();
  }
}
