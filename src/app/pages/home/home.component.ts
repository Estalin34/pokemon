import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../utils/pokemon';
import * as pokemonData from '../../../assets/json/pokemonData.json';


function randomInt(max: number){ 
  return Math.floor(Math.random()*max); 
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent implements OnInit {
  pokemons: Pokemon[] = (pokemonData as any).default; 
indicePokemonSemana:number=randomInt( 3);

  constructor() {}

  ngOnInit(): void {
    console.log(this.pokemons); 
  }
}
