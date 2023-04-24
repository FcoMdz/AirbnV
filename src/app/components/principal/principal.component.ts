import { Component } from '@angular/core';
import { CasasService } from 'src/app/services/casas.service';

@Component({
  selector: 'boot-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  casas:any [];
 constructor (public casasService: CasasService){
    this.casas = casasService.casas;
 }
}
