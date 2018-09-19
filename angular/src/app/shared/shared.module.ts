import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AlertComponent } from './components/';

import { DefaultImageDirective } from './directives/';

import { AddressService, DictionaryService, AlertService, InMemoryDataService } from './services/';


@NgModule({
  imports: [
    CommonModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true })    
  ],
  declarations: [
    AlertComponent,
    DefaultImageDirective
  ],
  exports: [
    AlertComponent,
    DefaultImageDirective
  ],
  providers: [
    AddressService,
    AlertService,
    InMemoryDataService,
    DictionaryService
  ]
})
export class SharedModule { }
