import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonDialogData } from 'src/app/shared/models/common-dialog-data.model';

@Component({
  selector: 'app-common-dialog-page',
  templateUrl: './common-dialog-page.component.html',
  styleUrls: ['./common-dialog-page.component.scss']
})
export class CommonDialogPageComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public DialogData: CommonDialogData
  ) { }

  ngOnInit(): void {
  }

}
