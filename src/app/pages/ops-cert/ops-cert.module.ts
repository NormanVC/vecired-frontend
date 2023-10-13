import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpsCertPageRoutingModule } from './ops-cert-routing.module';

import { OpsCertPage } from './ops-cert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpsCertPageRoutingModule
  ],
  declarations: [OpsCertPage]
})
export class OpsCertPageModule {}
