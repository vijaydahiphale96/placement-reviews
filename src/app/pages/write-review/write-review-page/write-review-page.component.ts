import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-write-review-page',
  templateUrl: './write-review-page.component.html',
  styleUrls: ['./write-review-page.component.scss']
})
export class WriteReviewPageComponent implements OnInit {

  public EDITOR = ClassicEditor;
  public CKEDITOR_CONFIG = {
    // tslint:disable-next-line:max-line-length
    toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|', 'indent', 'outdent', '|', 'blockQuote', 'insertTable', 'undo', 'redo']
  };

  reviewFrom: FormGroup;
  public PLACEMENT_STATUS = [
    'Placed',
    'Not Placed'
  ];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.generateReviewForm();
  }

  generateReviewForm() {
    this.reviewFrom = this.formBuilder.group({
      companyId: ['', [
        Validators.required
      ]],
      placementStatus: [this.PLACEMENT_STATUS[0], [
        Validators.required,
        Validators.minLength(5)
      ]],
    });
  }

}
