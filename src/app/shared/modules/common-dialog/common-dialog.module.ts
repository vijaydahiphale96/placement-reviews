import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonDialogPageComponent } from './common-dialog-page/common-dialog-page.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [CommonDialogPageComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    CommonDialogPageComponent
  ]
})
export class CommonDialogModule { }
