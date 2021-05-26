import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajensPageRoutingModule } from './viajens-routing.module';

import { ViajensPage } from './viajens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajensPageRoutingModule
  ],
  declarations: [ViajensPage]
})
export class ViajensPageModule {}
