import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajensPage } from './viajens.page';

const routes: Routes = [
  {
    path: '',
    component: ViajensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajensPageRoutingModule {}
