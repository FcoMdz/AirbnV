import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CasasService {
  casas:Casa [] = [
    
    { id: 1,
      nombre: "Casa 1",
      precio:100000,
      rutaImg:"../../assets/images/img1.png",
      descripcion:"Esta casa tiene bastante que ofrecer",
      categoria: "Casa grande"
     }
  
  ];
  constructor() { }

 
}
interface Casa {
  id:number;
  nombre:string;
  precio:number;
  rutaImg:string;
  descripcion:string;
  categoria:string;
}
