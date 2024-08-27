import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../utils/pokemon';
import { Router } from '@angular/router';
import * as pokemonData from '../../../assets/json/pokemonData.json';

@Component({
  selector: 'app-pokemos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemos.component.html',
  styleUrl: './pokemos.component.css'
})
export class PokemosComponent {
  pokemons: Pokemon[] = (pokemonData as any).default;
  constructor( private router:Router) {}
  ngOnInit(): void {
    
  }
  onClickButton(): void {
    console.log(this.pokemons);
    
  } 
  onClickPokemon(pokemon: Pokemon): void {
    this.router.navigate(['/pokemon', pokemon.id]);
  }


}
