import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterNavigationComponent } from './filter-navigation.component';
import { DataService } from './data.service';


@NgModule({
  imports: [
    CommonModule],
  declarations: [
    FilterNavigationComponent
  ],
  providers: [
    DataService
  ],
  exports: [
    FilterNavigationComponent
  ],
})
export class DataModule { }
