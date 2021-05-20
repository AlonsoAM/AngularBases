import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    }
  ];

  
  public get personajes() : Personaje[] {
    return [...this._personajes];
  }
  

  constructor() {}

  agregarPersonaje (personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
