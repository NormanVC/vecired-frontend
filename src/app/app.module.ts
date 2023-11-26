import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {FileOpener} from '@ionic-native/file-opener/ngx'

import { IonicStorageModule } from '@ionic/storage-angular';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports:
  [BrowserModule,
   IonicModule.forRoot(),
   AppRoutingModule,
   HttpClientModule,
   IonicStorageModule.forRoot()],
  providers:
  [
    Camera,
    FileTransfer,
    {
    provide:
      RouteReuseStrategy,
      useClass: IonicRouteStrategy }, FileOpener],
  bootstrap: [AppComponent],
})
export class AppModule {}
