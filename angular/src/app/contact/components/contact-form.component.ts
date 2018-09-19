import { Component, ElementRef, ViewChild, Input, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactlistService } from '../services/';
import { AlertService, AddressService, DictionaryService } from '../../shared/services/';
import { Contact, ActionForm } from '../../models/';
import { URL_REGEX, ZIPCODE_REGEX, PHONE_REGEX } from '../../models/validators';


@Component({
  selector: 'app-contact-form',
  templateUrl: '../templates/contact-form.component.html',
  providers: [ContactlistService, AddressService],
  styleUrls: ['../styles/contact.css']
})
export class ContactFormComponent implements OnInit, OnDestroy {
  @ViewChild('picture') picture: ElementRef;

  private form: FormGroup;
  private saveContact: Subscription = null;
  private loadContact: Subscription = null;
  private action: ActionForm = ActionForm.CREATE;
  private contact: Contact = new Contact();

  ActionForm = ActionForm;

  ngOnInit() {
    this.loadContact = this.route.data.subscribe((data) => {
      if (data.hasOwnProperty('contact')) {
        this.contact = data.contact;
        this.populateForm(this.contact);
        this.action = ActionForm.UPDATE;
      }
    })
  }

  constructor(
    private fb: FormBuilder,
    private alertSvc: AlertService,
    private contactsListSvc: ContactlistService,
    private addressSvc: AddressService,
    private dictionarySvc: DictionaryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.createForm();
  }




  get emailErrorMessage(): string | null {
    if (this.form.get('email').errors.required) {
      return this.dictionarySvc.getLabel('INPUT_REQUIRED_ERROR');
    }
    if (this.form.get('email').errors.email) {
      return this.dictionarySvc.getLabel('INPUT_EMAIL_ERROR');
    }
  }

  get zipCodeErrorMessage(): string | null {
    if (this.form.get('address.zipCode').errors.required) {
      return this.dictionarySvc.getLabel('INPUT_REQUIRED_ERROR');
    }
    if (this.form.get('address.zipCode').errors.pattern) {
      return this.dictionarySvc.getLabel('INPUT_PATTERN_ERROR');
    }
  }

  get pictureErrorMessage(): string | null {

    if (this.form.get('picture').errors.pattern) {
      return this.dictionarySvc.getLabel('INPUT_PATTERN_ERROR');
    }
    if (this.form.get('picture').errors.invalidImage) {
      return this.dictionarySvc.getLabel('IMAGE_NOT_FOUND_ERROR');
    }
  }


  createForm() {
    return this.fb.group({
      name: ['', Validators.required],
      picture: ['', Validators.pattern(URL_REGEX)],
      user: '',
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        street: ['', Validators.required],
        city: '',
        state: ['', Validators.required],
        zipCode: ['', [Validators.required, Validators.pattern(ZIPCODE_REGEX)]]
      }),
      phone: ['', [Validators.pattern(PHONE_REGEX)]],
    });
  }

  populateForm(contact) {
    let copyContact = Object.assign({}, contact);
    delete copyContact.id;

    this.form.setValue(copyContact);
    this.form.updateValueAndValidity();
  }


  get payload() {
    const id = this.id;
    return Object.assign({}, this.form.value, { id });
  }

  get id() {
    return this.contact.id;
  }

  save() {
    let service$: Observable<Contact>;

    switch (this.action) {
      case ActionForm.UPDATE:
        service$ = this.contactsListSvc.updateContact(this.id, this.contact)
        break;
      case ActionForm.CREATE:
        service$ = this.contactsListSvc.createContact(this.contact)
        break;
    }

    const keyMessage = ActionForm[this.action];

    this.disposeSubscriber (this.saveContact);
    this.saveContact = service$.subscribe(
      ok => {
        this.alertSvc.success(
          this.dictionarySvc.getLabel(`${keyMessage}_CONTACT_SUCCESS_MSG`)
        );
        if (this.action === ActionForm.CREATE) {
          this.router.navigate(['/contacts']);
        }
      },
      err => this.alertSvc.error(
        this.dictionarySvc.getLabel(`${keyMessage}_CONTACT_ERROR_MSG`)
      )
    );

  }


  ngOnDestroy() {
    this.disposeSubscriber (this.loadContact);
    this.disposeSubscriber (this.saveContact)
  }

  disposeSubscriber(subscriber) {
    if (subscriber) subscriber.unsubscribe();
  }
}
