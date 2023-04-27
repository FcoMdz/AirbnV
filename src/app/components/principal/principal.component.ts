import { Component } from '@angular/core';
import { Casa, CasasService } from 'src/app/services/casas.service';

@Component({
  selector: 'boot-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  casas:Casa [];
 constructor (public casasService: CasasService){
    this.casas = casasService.casas;
 }
}
