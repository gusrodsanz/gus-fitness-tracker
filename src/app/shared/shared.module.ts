import { CommonModule } from '@angular/common';
import {  NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
  ],
})
export class SharedModule {


}
