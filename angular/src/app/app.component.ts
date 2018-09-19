import { Component } from '@angular/core';
import { DictionaryService } from './shared/services/dictionary.service';


@Component({
  selector: 'app-root',
  template: `
    <div class="container" id="main">
      <app-alert></app-alert>
      <h1> {{ dictionarySvc.getLabel('TITLE') }} </h1>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {

  constructor(
    private dictionarySvc: DictionaryService
  ) {

  }
  
  ngOnInit() {
    
  }


}
