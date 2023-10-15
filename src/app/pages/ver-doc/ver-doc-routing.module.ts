import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerDocPage } from './ver-doc.page';

const routes: Routes = [
  {
    path: '',
    component: VerDocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerDocPageRoutingModule {}
