import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from './shared/shared.module';
import { CommonDialogPageComponent } from './shared/modules/common-dialog/common-dialog-page/common-dialog-page.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  entryComponents: [
    CommonDialogPageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
