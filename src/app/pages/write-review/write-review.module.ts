import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WriteReviewRoutingModule } from './write-review-routing.module';
import { WriteReviewPageComponent } from './write-review-page/write-review-page.component';
import { MatFormsModule } from 'src/app/shared/mat-forms.module';
import { BoxCommonLayoutModule } from 'src/app/shared/modules/atoms/box-common-layout/box-common-layout.module';
import { CKEditorModule } from 'ckeditor4-angular';

@NgModule({
  declarations: [WriteReviewPageComponent],
  imports: [
    CommonModule,
    WriteReviewRoutingModule,
    MatFormsModule,
    BoxCommonLayoutModule,
    CKEditorModule
  ]
})
export class WriteReviewModule { }
