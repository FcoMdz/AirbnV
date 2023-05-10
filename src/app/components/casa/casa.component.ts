import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { max, retry } from 'rxjs';
import { Casa, CasasService } from 'src/app/services/casas.service';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.css']
})
export class CasaComponent implements OnInit {
  i:number[] = [];
  minDate: Date = new Date();
  tmpDate: Date = new Date();
  maxDate: Date = new Date(this.tmpDate.setMonth(this.tmpDate.getMonth() + 12));
  rangeDates: Date[] = [this.minDate, this.minDate];
  reserva!:FormGroup;
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
  fechaActual = new Date();
  fecha:string = "";
 
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
    this.fecha = this.fechaActual.toLocaleString( );
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
    this.reserva = new FormGroup({
      'fecha': new FormControl(this.fechaActual.toLocaleDateString,[Validators.required]),
      'CantidadPersona' : new FormControl('1',[Validators.required])
    });
    this.validadCiclo();
  }

  validadCiclo():void{
    for(let a = 1; a <= this.casa.maxPersonas; a++ ){
      this.i[a-1]=a-1;
    }
  }

  registrarReserva():void{
    //Aqui se obtienen las fechas que selecciono el usuario
    let fechaSeleccionadaInicio = this.rangeDates[0].toLocaleTimeString();
    let fechaSeleccionadaFinal = this.rangeDates[1].toLocaleDateString();

    //NOTA: hay que hacer dinámica la seleccion de fechas y comprobar que sea correcto
    console.log(fechaSeleccionadaFinal);
    console.log(fechaSeleccionadaInicio);
    //let fechaIreserva = new Date(this.reserva.value["FechaInicio"]).toLocaleDateString();

    //console.log(fechaIreserva)
    //console.log(this.fecha)
  }
}