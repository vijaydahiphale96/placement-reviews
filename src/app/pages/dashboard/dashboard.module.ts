import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { BoxCommonLayoutModule } from 'src/app/shared/modules/atoms/box-common-layout/box-common-layout.module';
import { CompanyListItemModule } from 'src/app/shared/modules/atoms/company-list-item/company-list-item.module';
import { ReviewListItemModule } from 'src/app/shared/modules/atoms/review-list-item/review-list-item.module';


@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BoxCommonLayoutModule,
    CompanyListItemModule,
    ReviewListItemModule
  ]
})
export class DashboardModule { }
