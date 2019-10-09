import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountAdjustComponent } from './count-adjust/count-adjust.component';
import { CountControllerComponent } from './count-controller/count-controller.component';
import { CountDisplayComponent } from './count-display/count-display.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    CountDisplayComponent,
    CountAdjustComponent,
    CountControllerComponent
  ],
})
export class PartBModule { }
