import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificadorPage } from './verificador.page';

const routes: Routes = [
  {
    path: '',
    component: VerificadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificadorPageRoutingModule {}
