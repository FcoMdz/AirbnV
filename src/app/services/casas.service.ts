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
<<<<<<< HEAD
      categoria: "Casa grande"
     }
  
=======
      maxPersonas: 5,
      tags: ["Rural","Actividades", "Campo"],
      ubicacion: {name: "Aguascalientes", code: "AGS"}
     },

     {
      id: 2,
      nombre: "Casa 2",
      precio: 300000,
      rutaImg: "../../assets/images/img2.jpg",
      descripcion: "Es una casa de prueba",
      maxPersonas: 10,
      tags: ["Ciudad","Centro comercial"],
      ubicacion: {name: "Guanajuato", code: "GTO"}
     },
     {
      id: 3,
      nombre: "Casa 3",
      precio: 200000,
      rutaImg: "../../assets/images/img2.jpg",
      descripcion: "Es una casa de prueba",
      maxPersonas: 3,
      tags: ["Mar","Playa"],
      ubicacion: {name: "Aguascalientes", code: "AGS"}
     },
     {
      id: 4,
      nombre: "Casa 4",
      precio: 150000,
      rutaImg: "../../assets/images/img2.jpg",
      descripcion: "Es una casa de prueba",
      maxPersonas: 7,
      tags: ["Bosque","Libre"],
      ubicacion: {name: "Ciudad de México", code:"CDMX"}
     },
     {
      id: 4,
      nombre: "Casa 4",
      precio: 150000,
      rutaImg: "../../assets/images/img2.jpg",
      descripcion: "Es una casa de prueba",
      maxPersonas: 7,
      tags: ["Bosque","Libre"],
      ubicacion: {name: "Ciudad de México", code:"CDMX"}
     },
     {
      id: 3,
      nombre: "Casa 3",
      precio: 200000,
      rutaImg: "../../assets/images/img2.jpg",
      descripcion: "Es una casa de prueba",
      maxPersonas: 3,
      tags: ["Mar","Playa","Vista"],
      ubicacion: {name: "Aguascalientes", code: "AGS"}
     },
     { id: 1,
      nombre: "Casa 1",
      precio:100000,
      rutaImg:"../../assets/images/img1.png",
      descripcion:"Esta casa tiene bastante que ofrecer",
      maxPersonas: 5,
      tags: ["Rural","Actividades", "Campo"],
      ubicacion: {name: "Aguascalientes", code: "AGS"}
     },
>>>>>>> f7d0cbc445c06c9d5510de3f1b0cfbe74692e98f
  ];
  constructor() { }

 
}
export interface Casa {
  id:number;
  nombre:string;
  precio:number;
  rutaImg:string;
  descripcion:string;
<<<<<<< HEAD
  categoria:string;
=======
  maxPersonas:number;
  tags: string[];
  ubicacion: Bioma;
>>>>>>> f7d0cbc445c06c9d5510de3f1b0cfbe74692e98f
}

export interface Bioma {
  name: string;
  code: string;
}