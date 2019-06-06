import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';

import { MatToolbarModule, MatSlideToggleModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatButtonModule
  ],
  exports: [ ToolbarComponent ]
})
export class ToolbarModule { }
