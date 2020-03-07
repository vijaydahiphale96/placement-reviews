import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewListItemComponent } from './review-list-item/review-list-item.component';



@NgModule({
  declarations: [ReviewListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [ReviewListItemComponent]
})
export class ReviewListItemModule { }
