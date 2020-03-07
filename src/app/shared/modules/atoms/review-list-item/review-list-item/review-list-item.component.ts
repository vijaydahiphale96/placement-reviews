import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/shared/models/review.model';

@Component({
  selector: 'app-review-list-item',
  templateUrl: './review-list-item.component.html',
  styleUrls: ['./review-list-item.component.scss']
})
export class ReviewListItemComponent implements OnInit {

  @Input() reviewData: Review;

  constructor() { }

  ngOnInit(): void {
  }

}
