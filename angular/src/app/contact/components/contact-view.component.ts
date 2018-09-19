import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactlistService } from '../services/contactlist.service';
import { AlertService, DictionaryService } from '../../shared/services/';
import { Subscription } from 'rxjs/Subscription';
import { Contact } from '../../models/';
import { DataService } from '../../data/data.service';
import { FormGroup , FormControl } from '@angular/forms';
import { Router } from '@angular/router';

 
@Component({
  selector: 'app-contact-view',
  template: `
    <form class="form-group" [formGroup]="form">
      <div class="input-group">  
        <div class="input-group-addon">
          <span class="glyphicon glyphicon-search"></span>
        </div>
        <input formControlName="search" aria-controls="grouped-contacts-list" class="form-control" name="search" (keyup)="search = inputSearch.value" #inputSearch [attr.aria-label]="dictionarySvc.getLabel('SEARCH_FORM_LABEL')" [attr.placeholder]="dictionarySvc.getLabel('SEARCH_FORM_PLACEHOLDER')" type="search">
      </div>
    </form>
   
    <div id="grouped-contacts-list" aria-live="polite" *ngFor="let key of groupByData">
      <div [id]="key" *ngIf="groupedData && groupedData[key]">
        <strong>{{ key }}</strong>
        <app-contact-list [data]="groupedData[key]"></app-contact-list>
      </div>
    </div>

    <app-filter-navigation (navigationItemSelected)="onNavigationItemSelected($event)" [filterData]="groupByData"></app-filter-navigation>
    
    <footer>
      <a [attr.title]="dictionarySvc.getLabel('CREATE_ACTION_LINK')" [attr.aria-label]="dictionarySvc.getLabel('CREATE_ACTION_LINK')" routerLink="/contacts/create">
        <span class="glyphicon glyphicon-plus"></span>
      </a>
    </footer>
  `,
  styles: [`
    footer {
      position: fixed;
      bottom: 1rem;
      left: 1rem;
      right: 2rem;
      text-align: right;
    }

    @media screen and (min-width: 1024px) {
      footer {
        right: 1rem;
      }
    }
  `],
  providers: [ContactlistService]
})
export class ContactViewComponent implements OnInit, OnDestroy {
  private groupContacts: Subscription = null;
  private loadContacts: Subscription = null;
  
  private form: FormGroup = new FormGroup({
    search: new FormControl('')
  });

  private groupedData: { [key: string]: Array<Contact> };


  constructor(
    private contactsSvc: ContactlistService,
    private alertSvc: AlertService,
    private dataSvc: DataService,
    private dictionarySvc: DictionaryService
  ) { }


  ngOnInit() {
    this.loadContacts = this.contactsSvc.getContactsList()
      .subscribe(
        contactsList => {
          this.dataSvc.data = contactsList;
          
          this.groupedData = this.getGroupedData(this.form.get('search').value);
        },
        error => this.alertSvc.error(
          this.dictionarySvc.getLabel('RESOURCE_NOT_FOUND_ERROR')
        )
      );

      this.groupContacts = this.form.get('search').valueChanges.debounceTime(500)
      .distinctUntilChanged()
      .subscribe(search => {
        this.groupedData = this.getGroupedData(search)
      })
  }

  onNavigationItemSelected(item) {
    const el = document.getElementById(item);

    if (el) {
      window.scroll(0, el.offsetTop);
    }
  }

  disposeSubscriber(subscriber) {
    if (subscriber) subscriber.unsubscribe();
  }
  
  ngOnDestroy() {
    this.disposeSubscriber(this.groupContacts);
    this.disposeSubscriber(this.loadContacts);
  }

  get groupByData(): Array<string> {
    return [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9'
    ];
  }

  groupCallback(data) {
    return c => c.phone && c.phone[1] === data;
  }


  getGroupedData(search) {
    return this.dataSvc.getGroupedData(
      this.groupByData,
      this.groupCallback,
      this.dataSvc.filterBy(search, 'name', 'user', 'email', 'address.state')
    )
  }
}
