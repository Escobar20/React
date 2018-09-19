import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact-list',
  template: `
  <div class="list-group">
    <div class="list-group-item" *ngFor="let contact of data">
      <a routerLink="/contacts/{{ contact.id }}">
        <img class="img-circle" appDefaultImage alt="" [src]="contact.picture">
        {{ contact.name }}
      </a>
    </div>
  </div>
  `,
  styles: [`
  img {
    width: 22px;
    height: 20px;
  }
  `]
})
export class ContactListComponent {
  @Input() data = [];

  constructor() { }
}
