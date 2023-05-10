import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { elementAt } from 'rxjs';
import { Bioma, Casa, CasasService } from 'src/app/services/casas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})


export class BusquedaComponent implements OnInit {

  busqueda: string = "";
  casas: Casa[] = [];
  resultados: Casa[] = [];
  resultadosFiltrados: Casa[] = [];
  rangeValues: number[] = [];
  maxValue: number = 0;
  minValue: number = 0;
  maxPersonas: number = 0;
  minPersonas: number = 1;
  cantPersonas: number = 1;
  minDate: Date = new Date();
  tmpDate: Date = new Date();
  maxDate: Date = new Date(this.tmpDate.setMonth(this.tmpDate.getMonth() + 12));
  rangeDates: Date[] = [this.minDate, this.minDate];
  ciudades: Bioma[] = [];
  ciudadSeleccionada: Bioma = { name: "", code: "" };

  tags: string[] = [];
  tagsSeleccion: string[] = [];

  precios: any = document.getElementById("precios")!;

  constructor(private rutaActiva: ActivatedRoute, private casasService: CasasService) {
    this.casas = this.casasService.casas;
  }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((params: Params) => {
      this.busqueda = params["termino"];
      if (this.busqueda == undefined) {
        this.busqueda = "";
      }
      this.resultados = [];
      this.ciudades = [];
      this.maxValue = Number.NEGATIVE_INFINITY;
      this.minValue = Number.POSITIVE_INFINITY;
      this.maxPersonas = Number.NEGATIVE_INFINITY;
      this.casas.forEach(element => {
        if (
          element.id.toString().includes(this.busqueda)
          || element.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
          || element.descripcion.toLowerCase().includes(this.busqueda.toLowerCase())
          || element.tags.toString().toLowerCase().includes(this.busqueda.toLowerCase())
          || element.ubicacion.name.toLowerCase().includes(this.busqueda.toLowerCase())
        ) {
          this.resultados.push(element);
          if (element.precio > this.maxValue) this.maxValue = element.precio;
          if (element.precio < this.minValue) this.minValue = element.precio;
          if (element.maxPersonas > this.maxPersonas) this.maxPersonas = element.maxPersonas;
          element.tags.forEach(tag => {
            if (!this.tags.includes(tag)) {
              this.tags.push(tag);
            }
          });
          var band = true;
          this.ciudades.forEach(ciudad => {
            if (ciudad.code.includes(element.ubicacion.code)) {
              band = false;
            }
          });
          if (band) {
            this.ciudades.push(element.ubicacion);
          }
        }
      });
      this.rangeValues = [this.minValue, this.maxValue];
      this.resultadosFiltrados = this.resultados;
    });
  }

  filtrarResultados(): void {
    if (this.ciudadSeleccionada == null) this.ciudadSeleccionada = { name: "", code: "" };
    this.resultadosFiltrados = [];

    for (let i = 0; i < this.resultados.length; i++) {

      const element = this.resultados[i];
      if (element.precio < this.rangeValues[0] ||
        element.precio > this.rangeValues[1] ||
        element.maxPersonas < this.cantPersonas) {
        continue;
      }

      if (this.ciudadSeleccionada.code != "") {
        if (this.ciudadSeleccionada.code != element.ubicacion.code) continue;
      }

      if (this.tagsSeleccion.length != 0) {
        var flag = false;
        this.tagsSeleccion.forEach(tagSel => {
          if (element.tags.includes(tagSel)) {
            flag = true;
          }
        });
        if (!flag) continue;
      }
      this.resultadosFiltrados.push(element);
    }
  }

}