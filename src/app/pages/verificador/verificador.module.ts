import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificadorPageRoutingModule } from './verificador-routing.module';

import { VerificadorPage } from './verificador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificadorPageRoutingModule
  ],
  declarations: [VerificadorPage]
})
export class VerificadorPageModule {}
