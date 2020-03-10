import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-write-review-page',
  templateUrl: './write-review-page.component.html',
  styleUrls: ['./write-review-page.component.scss']
})
export class WriteReviewPageComponent implements OnInit {

  public Editor = ClassicEditor;

  constructor() { }

  ngOnInit(): void {
  }

}
