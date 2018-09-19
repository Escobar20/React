import { Component, Input, OnDestroy } from '@angular/core';
import { Contact } from '../../models/';
import { ContactlistService } from '../services/';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AlertService, DictionaryService } from '../../shared/services/';

@Component({
  selector: 'app-contact',
  template: `
    <div>
      <nav>
        <a routerLink="/contacts/{{ contact.id }}/update" [attr.aria-label]="dictionarySvc.getLabel('UPDATE_ACTION_LINK')" [attr.title]="dictionarySvc.getLabel('UPDATE_ACTION_LINK')">
          <span class="glyphicon glyphicon-pencil"></span>
        </a>
        <button (click)="remove()" [attr.title]="dictionarySvc.getLabel('DELETE_ACTION_LINK')" [attr.aria-label]="dictionarySvc.getLabel('DELETE_ACTION_LINK')" type="button">
          <span class="glyphicon glyphicon-remove"></span>
        </button>
        <a routerLink="/contacts/" [attr.aria-label]="dictionarySvc.getLabel('BACK_TO_HOME')" [attr.title]="dictionarySvc.getLabel('BACK_TO_HOME')">
          <span class="glyphicon glyphicon-arrow-left"></span>
        </a>
      </nav>
      <img *ngIf="contact.picture" [src]="contact.picture" alt="" class="img-responsive">
      <h3>{{ contact.name }}</h3>
      <button type="button" class="upload-picture">
        <span class="glyphicon glyphicon-camera"></span>
      </button>
    </div>
    <div class="list-group">
      <div *ngIf="contact.phone" class="list-group-item">
        <span class="glyphicon glyphicon-earphone"></span>
        <a href="tel:{{ contact.phone }}">{{ contact.phone }}</a>
      </div>
      <div class="list-group-item">
        <span class="glyphicon glyphicon-envelope"></span>
        <a href="mailto:{{ contact.email }}">{{ contact.email }}</a>
      </div>
      <div class="list-group-item clearfix">
        <span class="pull-left glyphicon glyphicon-home"></span>
        <div class="pull-left">
          <div>{{ contact.address.street }}</div>
          <div>{{ contact.address.city }}, {{ contact.address.state }}</div>
          <div>{{ contact.address.zipCode }}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../styles/contact.css']
})
export class ContactComponent implements OnDestroy {
  private contact: Contact = new Contact();

  private subscriber: Subscription = null;
  private id = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dictionarySvc: DictionaryService,
    private alertSvc: AlertService,
    private contactsListSvc: ContactlistService
  ) { }

  

  ngOnInit() {
    this.route.data.subscribe((data: { contact: Contact }) => {
      this.contact = data.contact;
      this.id = this.contact.id;
    })
  }

  ngOnDestroy() {
    if (this.subscriber) {
      this.subscriber.unsubscribe();
    }
  }

  remove() {
    if (confirm(this.dictionarySvc.getLabel('DELETE_CONTACT_CONFIRMATION'))) {
      this.subscriber = this.contactsListSvc.deleteContact(this.id)
        .subscribe(
        ok => {
          this.alertSvc.success(
            this.dictionarySvc.getLabel('DELETE_CONTACT_SUCCESS_MSG')
          );
          this.router.navigate(['/contacts']);
        },
        err => this.alertSvc.error('DELETE_CONTACT_ERROR_MSG'),
      )

    }
  }

}
