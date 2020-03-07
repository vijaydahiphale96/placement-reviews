import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListItemComponent } from './company-list-item/company-list-item.component';



@NgModule({
  declarations: [CompanyListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [CompanyListItemComponent]
})
export class CompanyListItemModule { }
