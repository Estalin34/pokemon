import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  mesaje?:string;

  constructor() { }

  setMensaje(mensaje:string){
    this.mesaje =mensaje;
  }
}
