import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Casa, CasasService } from 'src/app/services/casas.service';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.css']
})
export class CasaComponent implements OnInit {
  casa: Casa = {id: 0,
    nombre: "",
    precio: 0,
    rutaImg: "",
    descripcion:"",
    categoria:"",
    maxPersonas: 0,
    tags: [],
    ubicacion: {name:"",code:""}
  }; 

  constructor(private casaService:CasasService, private rutaActiva:ActivatedRoute){
    const routeParams = this.rutaActiva.snapshot.params;
    this.casaService.casas.forEach(casita => {
      if(casita.nombre === this.rutaActiva.snapshot.params['casa']){
        this.casa = {
          id: casita.id,
          nombre: casita.nombre,
          precio: casita.precio,
          rutaImg: "../"+casita.rutaImg,
          descripcion:casita.descripcion,
          categoria:casita.categoria,
          maxPersonas: casita.maxPersonas,
          tags: casita.tags,
          ubicacion: casita.ubicacion
        }
      }
    });
  }
  ngOnInit(){
    const routeParams = this.rutaActiva.snapshot.params;
    this.casaService.casas.forEach(casita => {
      if(casita.nombre === this.rutaActiva.snapshot.params['casa']){
        this.casa = {
          id: casita.id,
          nombre: casita.nombre,
          precio: casita.precio,
          rutaImg: "../"+casita.rutaImg,
          descripcion:casita.descripcion,
          categoria:casita.categoria,
          maxPersonas: casita.maxPersonas,
          tags: casita.tags,
          ubicacion: casita.ubicacion
        }
      }
    });
    console.log(this.casa)
  }
 
}
