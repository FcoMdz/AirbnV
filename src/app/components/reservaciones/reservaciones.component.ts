import { Component } from '@angular/core';
import { LocalStorageService, casasData } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent {
  data!:any;
  constructor(){
    this.data =  localStorage.getItem('casasData');
    this.data = JSON.parse(this.data)
    console.log(this.data[1]);
  }
}
