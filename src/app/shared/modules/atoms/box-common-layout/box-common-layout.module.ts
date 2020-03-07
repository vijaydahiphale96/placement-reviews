import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxCommonLayoutComponent } from './box-common-layout/box-common-layout.component';
import { MatCommonModule } from 'src/app/shared/mat-common.module';



@NgModule({
  declarations: [BoxCommonLayoutComponent],
  imports: [
    CommonModule,
    MatCommonModule
  ],
  exports: [BoxCommonLayoutComponent]
})
export class BoxCommonLayoutModule { }
