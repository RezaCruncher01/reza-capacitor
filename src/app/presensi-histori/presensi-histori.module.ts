import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresensiHistoriPageRoutingModule } from './presensi-histori-routing.module';

import { PresensiHistoriPage } from './presensi-histori.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresensiHistoriPageRoutingModule
  ],
  declarations: [PresensiHistoriPage]
})
export class PresensiHistoriPageModule {}
