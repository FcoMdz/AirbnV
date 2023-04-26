import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'proyecto';
  //Busqueda
  termino:HTMLInputElement | undefined;
  busqueda:string = "";

  ngOnInit(): void {
    //Busqueda
    this.termino = <HTMLInputElement> document.getElementById("termino")!;
    console.log(this.termino);
    this.termino.addEventListener("keyup",() => {
      if(this.termino!=undefined){
        this.busqueda = this.termino.value;

      }else{
        this.busqueda = "";
      }
    });
  }
}

