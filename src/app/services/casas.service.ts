import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CasasService {
  casas:Casa [] = [
    
    { id: 1,
      nombre: "Casa 1",
      precio:100000,
      rutaImg:["/src/assets/casas/casa1/casa1.jpg",
                "/src/assets/casas/casa1/casa1.1.jpg"],
      descripcion:"Esta casa tiene bastante que ofrecer",
      categoria: "Casa grande",
      maxPersonas: 5,
      tags: ["Rural","Actividades", "Campo"],
      ubicacion: {name: "Aguascalientes", code: "AGS"}
     },

     {
      id: 2,
      nombre: "Casa 2",
      precio: 300000,
      rutaImg: ["../../assets/images/img2.jpg"],
      descripcion: "Es una casa de prueba",
      categoria: "Casa grande",
      maxPersonas: 10,
      tags: ["Ciudad","Centro comercial"],
      ubicacion: {name: "Guanajuato", code: "GTO"}
     },
     {
      id: 3,
      nombre: "Casa 3",
      precio: 200000,
      rutaImg: ["../../assets/images/img3.jpg",
                ""
                ],
      descripcion: "Es una casa de prueba",
      categoria: "Casa grande",
      maxPersonas: 3,
      tags: ["Mar","Playa"],
      ubicacion: {name: "Aguascalientes", code: "AGS"}
     },
     {
      id: 4,
      nombre: "Casa 4",
      precio: 150000,
      rutaImg: ["../../assets/images/img4.png"],
      descripcion: "Es una casa de prueba",
      categoria: "Casa grande",
      maxPersonas: 7,
      tags: ["Bosque","Libre"],
      ubicacion: {name: "Ciudad de México", code:"CDMX"}
     },
     {
      id: 5,
      nombre: "Casa 5",
      precio: 150000,
      rutaImg: ["../../assets/images/img5.jpg"],
      descripcion: "Es una casa de prueba",
      categoria: "Casa grande",
      maxPersonas: 7,
      tags: ["Bosque","Libre"],
      ubicacion: {name: "Ciudad de México", code:"CDMX"}
     },
     {
      id: 6,
      nombre: "Casa 6",
      precio: 200000,
      rutaImg: ["../../assets/images/img6.jpg"],
      descripcion: "Es una casa de prueba",
      categoria: "Casa grande",
      maxPersonas: 3,
      tags: ["Mar","Playa","Vista"],
      ubicacion: {name: "Aguascalientes", code: "AGS"}
     },
     { id: 7,
      nombre: "Casa 7",
      precio:100000,
      rutaImg:["../../assets/images/img7.png"],
      descripcion:"Esta casa tiene bastante que ofrecer",
      categoria: "Casa grande",
      maxPersonas: 5,
      tags: ["Rural","Actividades", "Campo"],
      ubicacion: {name: "Aguascalientes", code: "AGS"}
     },
  ];
  constructor() { }

 
}
export interface Casa {
  id:number;
  nombre:string;
  precio:number;
  rutaImg:string[];
  descripcion:string;
  categoria:string;
  maxPersonas:number;
  tags: string[];
  ubicacion: Bioma;
}

export interface Bioma {
  name: string;
  code: string;
}