import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { QRCodeModule } from 'angular2-qrcode';

import { SurveyListComponent } from './survey-list.component';
import { SurveyQrcodeDialogComponent } from './survey-qrcode-dialog';
import { routes } from './survey-list.routes';

@NgModule({
  declarations: [
    SurveyListComponent,
    SurveyQrcodeDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    QRCodeModule,
    RouterModule.forChild(routes),
  ],
  bootstrap: [SurveyListComponent, SurveyQrcodeDialogComponent],
})
export class SurveyListModule {
  public static routes = routes;
}
