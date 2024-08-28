import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon,PokemonResponse } from '../../utils/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
 private url='https://pokeapi.co/api/v2/pokemon';

  constructor(private http:HttpClient) { }
  getPokemons():Observable<PokemonResponse>{
      return this.http.get<PokemonResponse>(this.url);
  }
 getPokemon(name:string):Observable<Pokemon>{
  return this.http.get<Pokemon>(`${this.url}/${name}`);
 }
}
