import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { max, retry } from 'rxjs';
import { Casa, CasasService } from 'src/app/services/casas.service';
import { LocalStorageService, casasData } from 'src/app/services/local-storage.service';
import Swal from 'sweetalert2';
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
  diasdesh:Date[]=[];

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

    let infoCasas:casasData[];
    if(localStorage.getItem("casasData") != null){
      infoCasas = JSON.parse(localStorage.getItem('casasData') || "{}");
      infoCasas.forEach(apartado => {
        if(apartado.id == this.casa.id){
          let fechas:Date[] = [];
          let fechaInicio = new Date(apartado.fechaInicio);
          let fechaFinal = new Date(apartado.fechaFinal);
          while(fechaInicio <= fechaFinal){
            fechas.push(new Date(fechaInicio));
            fechaInicio.setDate(fechaInicio.getDate()+1);
          }
          this.diasdesh = this.diasdesh.concat(fechas);
        }
      });
    }
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
      'fecha': new FormControl('',[Validators.required]),
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
    let fechaSeleccionadaInicio = this.reserva.value.fecha[0].toDateString();
    let fechaSeleccionadaFinal = this.reserva.value.fecha[1].toDateString();

    //NOTA: hay que hacer dinámica la seleccion de fechas y comprobar que sea correcto
    let infoCasas:casasData[];
    let casaAgregar:casasData = {
      id: this.casa.id,
      personas: this.reserva.value.CantidadPersona,
      precio: this.casa.precio,
      fechaInicio: fechaSeleccionadaInicio,
      fechaFinal: fechaSeleccionadaFinal
    };
    if(localStorage.getItem("casasData") === null){
      infoCasas = [];
      infoCasas.push(casaAgregar);
    }else{
      infoCasas = JSON.parse(localStorage.getItem('casasData') || "{}");
      let band = false;
      infoCasas.forEach(apartado => {
        if(apartado.id == this.casa.id){
          let fechaInicio = new Date(apartado.fechaInicio);
          let fechaFinal = new Date(apartado.fechaFinal);
          let fechaNuevaInicio = new Date(fechaSeleccionadaInicio);
          let fechaNuevaFinal = new Date(fechaSeleccionadaFinal);
          if(fechaFinal >= fechaNuevaInicio && fechaInicio <= fechaNuevaFinal){
            band = true;
          }
        }
      });

      if(band){
        Swal.fire('Error','Ha ocurrido un error al verificar las fechas, revise que su seleccion este habilitada','error');
      }else{
        infoCasas.push(casaAgregar);
        Swal.fire('Apartado Confirmado','Se ha registrado su apartado','success');
      }
    }
    localStorage.setItem('casasData',JSON.stringify(infoCasas));
  }

  /*
  Intento fallido de revisar la fecha
  validarFecha(control:AbstractControl):ValidationErrors | null{
    let fechaInicio = new Date(control.value[0]);
    let fechaFinal = new Date(control.value[1]);

    let diasdesh:Date[] = [];
    let fechas:Date[] = [];
    while(fechaInicio <= fechaFinal){
      fechas.push(new Date(fechaInicio));
      fechaInicio.setDate(fechaInicio.getDate()+1);
    }

    let infoCasas:casasData[];
    if(localStorage.getItem("casasData") != null){
      infoCasas = JSON.parse(localStorage.getItem('casasData') || "{}");
      infoCasas.forEach(apartado => {
        if(apartado.id == this.casa.id){
          let fechas:Date[] = [];
          let fechaInicio = new Date(apartado.fechaInicio);
          let fechaFinal = new Date(apartado.fechaFinal);
          while(fechaInicio <= fechaFinal){
            fechas.push(new Date(fechaInicio));
            fechaInicio.setDate(fechaInicio.getDate()+1);
          }
          diasdesh = diasdesh.concat(fechas);
        }
      });
    }

    let band = false;

    fechas.forEach(fecha => {
      if(diasdesh.includes(fecha)){
        band = true;
      }
    })
    if(band){
      return null;
    }
    return {validarFecha:true};
  }*/
}
