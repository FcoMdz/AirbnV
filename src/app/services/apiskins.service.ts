import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiskinsService {

  constructor(private http: HttpClient) { }

  retornar(usuarios:string[]) {
    let resultados:any = [];
    usuarios.forEach(usuario => {
      this.http.get("https://api.ashcon.app/mojang/v2/user/"+usuario).subscribe(
        (result:any) => {
          resultados.push(result);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error");
          } else {
            console.log("Server-side error");
          }
        }
      );
    });
    return resultados;

  }
}
