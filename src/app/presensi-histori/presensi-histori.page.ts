import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-presensi-histori',
  templateUrl: './presensi-histori.page.html',
  styleUrls: ['./presensi-histori.page.scss'],
})
export class PresensiHistoriPage {
  tanggal: any;
  namasiswa: any;
  statuskehadiran: any;

  constructor(private apiService: ApiService) { }

  submitPresensi() {
    const dataPresensi = {
      tanggal: this.tanggal,
      namasiswa: this.namasiswa,
      status: this.statuskehadiran
    };
    this.apiService.submitPresensi(dataPresensi).subscribe((response: any) => {
      // Sekarang response dianggap memiliki tipe 'any', yang berarti bisa apa saja.
      console.log(response);
      // Lakukan sesuatu dengan response di sini
    });
    
  }
}
