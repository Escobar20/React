import { NgModule } from '@angular/core';
import { ContactViewComponent, ContactFormComponent, ContactComponent } from './components/';
import { RouterModule, Routes } from '@angular/router';
import { ContactResolver } from './services/';


const routes: Routes = [
  {
    path: 'contacts/:id/update',
    component: ContactFormComponent,
    resolve: {
      contact: ContactResolver
    }
  },
  {
    path: 'contacts/create',
    component: ContactFormComponent
  },
  {
    path: 'contacts/:id',
    component: ContactComponent,
    resolve: {
      contact: ContactResolver
    }
  },
  {
    path: 'contacts',
    component: ContactViewComponent,

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ContactResolver
  ]
})
export class ContactRoutingModule { }
