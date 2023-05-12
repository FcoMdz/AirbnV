import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  usuario = new FormGroup({
    'nombre': new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'usrName': new FormControl('', [Validators.required]),
    'telefono': new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
    'passwd': new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  fondo = 'linear-gradient(135deg, #71b7e6, #9b59b6)';


  public get name() {
    return this.usuario.get('nombre');
  }

  public get email() {
    return this.usuario.get('email');
  }

  public get usrName() {
    return this.usuario.get('usrName');
  }

  public get telefono() {
    return this.usuario.get('telefono');
  }

  public get passwd() {
    return this.usuario.get('passwd');
  }

  procesar() {
    console.log(this.usuario.value);
  }

}
