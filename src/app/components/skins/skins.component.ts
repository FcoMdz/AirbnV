import { Component, OnInit } from '@angular/core';
import { ApiskinsService } from '../../services/apiskins.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.css']
})
export class SkinsComponent implements OnInit{
  resultados!:any;
  usuarios:string[] = [
    "VEGETTA777",
    "Willyrex",
    "bysTaXx_x",
    "elrubius",
    "xFarganx",
    "ElRichMC",
    "Gerardo12002",
  ]
  constructor(private apiMinecraft:ApiskinsService){
  }
  ngOnInit(){
    this.recuperarDatos();
  }
  recuperarDatos(){
    this.resultados = this.apiMinecraft.retornar(this.usuarios);
  }
}
