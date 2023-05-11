import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
}
export interface casasData{
  id:number;
  personas:number;
  precio:number;
  fechaInicio:string;
  fechaFinal:string;
}
