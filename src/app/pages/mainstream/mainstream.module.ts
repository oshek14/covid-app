import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table'
import { MainstreamComponent } from './mainstream.component';
import { CountryListComponent } from 'src/app/components/country-list/country-list.component';
import { CountryListItemComponent } from 'src/app/components/country-list/country-list-item/country-list-item.component';


@NgModule({
  declarations: [
    MainstreamComponent,
    CountryListComponent,
    CountryListItemComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    MainstreamComponent,
  ]
})
export class MainstreamModule { }
