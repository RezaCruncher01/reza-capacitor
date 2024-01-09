import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Import Add (before/after import please installation axios from cmd)
import axios from 'axios';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  // Variabel GetData for array
  public allData: any = [];

  constructor() {
    // Form Load GetData
    this.GetData();
  }
  // Function GetData from API ---------------------------------------------------------------------------
  async GetData() {
    const res: any = await axios.get('https://praktikum-cpanel-unbin.com/api_map_reza/get_submitpresensi.php');


    console.log(res.data);
    this.allData = res.data.result;
  }
  // Function getData ---------------------------------------------------------------------------
}