import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpsCertPage } from './ops-cert.page';

const routes: Routes = [
  {
    path: '',
    component: OpsCertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpsCertPageRoutingModule {}
