import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ContactlistService } from './services/contactlist.service'

import { ContactComponent, ContactViewComponent, ContactListComponent, ContactFormComponent } from './components/';

import { SharedModule } from '../shared/shared.module';
import { DataModule } from '../data/data.module';


@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DataModule,
    SharedModule
  ],
  declarations: [
    ContactComponent,
    ContactViewComponent,
    ContactListComponent,
    ContactFormComponent
  ],
  exports: [
    ContactComponent,
    ContactViewComponent,
    ContactListComponent,
    ContactFormComponent
  ],
  providers: [
    ContactlistService
  ]
})
export class ContactModule { }
