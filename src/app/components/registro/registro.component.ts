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
    'passwd': new FormControl('', [Validators.required, Validators.minLength(5)]),
    'gender': new FormControl('', Validators.required)
  });

  passwdConf = new FormControl('', Validators.required);

  usuariosFromLS: string[] = []

  usuariosObj: Object[] = []

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

  public get gender() {
    return this.usuario.get('gender');
  }

  procesar() {
    this.usuariosFromLS.push(JSON.stringify(this.usuario.value))
    localStorage.setItem('usuarios', this.usuariosFromLS.toString())

    console.log("this.usuario.value ", this.usuario.value);
    console.log("this.usuariosFromLS ", this.usuariosFromLS);

    for (let index = 0; index < this.usuariosFromLS.length; index++) {
      console.log("[" + index + "]", this.usuariosFromLS[index]);
    }

    //Recuperamos la info de LocalStorage y almacenamos en el array de objetos
    for (let index = 0; index < this.usuariosFromLS.length; index++) {
      this.usuariosObj[index] = JSON.parse(this.usuariosFromLS[index]);
    }

    console.log("UsuariosObj: ", this.usuariosObj);
    for (let index = 0; index < this.usuariosObj.length; index++) {
      console.log("[" + index + "]", this.usuariosObj[index]);
    }

  }

  checkPsswd(): boolean {
    if (this.usuario.get('passwd')?.value === this.passwdConf.value) {
      return true;
    }
    return false;
  }
}
