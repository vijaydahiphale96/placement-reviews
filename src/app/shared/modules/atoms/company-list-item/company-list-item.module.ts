import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListItemComponent } from './company-list-item/company-list-item.component';
import { MatCommonModule } from 'src/app/shared/mat-common.module';

@NgModule({
  declarations: [CompanyListItemComponent],
  imports: [
    CommonModule,
    MatCommonModule
  ],
  exports: [CompanyListItemComponent]
})
export class CompanyListItemModule { }
