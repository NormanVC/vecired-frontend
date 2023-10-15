import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerDocPageRoutingModule } from './ver-doc-routing.module';

import { VerDocPage } from './ver-doc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerDocPageRoutingModule
  ],
  declarations: [VerDocPage]
})
export class VerDocPageModule {}
