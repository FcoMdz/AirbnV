import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Casa, CasasService } from 'src/app/services/casas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit{

  busqueda:string = "";
  casas:Casa [] = [];
  resultados: Casa[] = [];

  constructor(private rutaActiva: ActivatedRoute, private casasService: CasasService){
    this.casas = this.casasService.casas;
  }
  
  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params: Params) =>{
      this.busqueda = params["termino"];
      if(this.busqueda == undefined){
        this.busqueda = "";
      }
      this.obtenerResultados();
    });
  }

  obtenerResultados():void{
    this.resultados = [];
    this.casas.forEach(element => {
      if(
          element.id.toString().includes(this.busqueda)
          || element.nombre.includes(this.busqueda)
          || element.descripcion.includes(this.busqueda)
        ){
        this.resultados.push(element);
      }
    });

  }

}
