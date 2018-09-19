import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-navigation',
  template: `
    <nav>
      <ul class="list-unstyled">
        <li *ngFor="let key of filterData">
          <a (click)="navigate(key)" href="#">{{key}}</a>
        </li>
      </ul>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 2;
    }
  `]
})
export class FilterNavigationComponent {

  @Output() navigationItemSelected = new EventEmitter<string>();

  constructor() { }

  navigate(item: string) {
    this.navigationItemSelected.emit(item);
    return false;
  }

  @Input() filterData = [];

}
