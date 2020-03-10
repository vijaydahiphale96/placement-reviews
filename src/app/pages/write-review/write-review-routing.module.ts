import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WriteReviewPageComponent } from './write-review-page/write-review-page.component';


const routes: Routes = [
  {
    path: '',
    component: WriteReviewPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WriteReviewRoutingModule { }
