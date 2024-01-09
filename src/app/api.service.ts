import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://praktikum-cpanel-unbin.com/api_map_reza/submitPresensi.php'; // Ganti dengan URL API Anda

  constructor(private http: HttpClient) { }

  submitPresensi(dataPresensi: any) {
    return this.http.post(`${this.apiUrl}/submitPresensi`, dataPresensi);
  }
 
  }


