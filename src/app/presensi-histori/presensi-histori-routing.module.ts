import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresensiHistoriPage } from './presensi-histori.page';

const routes: Routes = [
  {
    path: '',
    component: PresensiHistoriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresensiHistoriPageRoutingModule {}
