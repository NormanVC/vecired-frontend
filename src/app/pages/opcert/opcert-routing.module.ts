import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpcertPage } from './opcert.page';

const routes: Routes = [
  {
    path: '',
    component: OpcertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpcertPageRoutingModule {}
