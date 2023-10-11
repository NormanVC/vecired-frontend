import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcertPageRoutingModule } from './opcert-routing.module';

import { OpcertPage } from './opcert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcertPageRoutingModule
  ],
  declarations: [OpcertPage]
})
export class OpcertPageModule {}
