import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import Swal from 'sweetalert2';

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

  passwd2 = new FormControl('', Validators.required)

  usuarios: string[] = [];

  usuariosAux: Object[] = [];

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
    if(document.getElementById("registro")?.classList.contains("habilitado")){
      this.usuarios.push(JSON.stringify(this.usuario.value))
      localStorage.setItem('usuarios', this.usuarios.toString())
  
      console.log("this.usuario.value ", this.usuario.value);
      console.log("this.usuarios ", this.usuarios);
  
      for (let index = 0; index < this.usuarios.length; index++) {
        console.log("[" + index + "]", this.usuarios[index]);
      }
  
      //Recuperamos la info de LocalStorage y almacenamos en el array de objetos
      for (let index = 0; index < this.usuarios.length; index++) {
        this.usuariosAux[index] = JSON.parse(this.usuarios[index]);
      }
  
      for (let index = 0; index < this.usuariosAux.length; index++) {
        console.log("[" + index + "]", this.usuariosAux[index]);
      }
      Swal.fire('Registro confirmado','Se ha registrado correctamente','success');
    }else{
      Swal.fire('Error','Revise que los datos esten completos','error');
    }
  }

  checkPasswd(): boolean {
    if(this.usuario.get('passwd') == document.getElementById('passwd2')) {
      return true;
    }
    return false;
  }

}
