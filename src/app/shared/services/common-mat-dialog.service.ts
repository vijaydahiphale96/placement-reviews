import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommonDialogPageComponent } from '../modules/common-dialog/common-dialog-page/common-dialog-page.component';
import { CommonDialogData } from '../models/common-dialog-data.model';

@Injectable({
  providedIn: 'root'
})
export class CommonMatDialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  openCommonDialog(message: string, modalType: string): Promise<boolean> {
    return this.getMatDialogReference({ message, modalType }).afterClosed().toPromise()
  }

  getMatDialogReference(modalDta: CommonDialogData): MatDialogRef<CommonDialogPageComponent> {
    return this.dialog.open(CommonDialogPageComponent, {
      width: '400px',
      data: modalDta
    });
  }

}
