import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon, PokemonResponse } from '../../utils/pokemon';
import { Router } from '@angular/router';
import * as pokemonData from '../../../assets/json/pokemonData.json';
import { PokemonsService } from '../../services/pokemons/pokemons.service';
import { zip } from 'rxjs';

@Component({
  selector: 'app-pokemos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemos.component.html',
  styleUrl: './pokemos.component.css',
})
export class PokemosComponent {
  // pokemons: Pokemon[] = (pokemonData as any).default;
  pokemon: Pokemon[] = [];
  pokemonResponse?:PokemonResponse;

  constructor(private router: Router,private pokemonsService:PokemonsService) {}
  ngOnInit(): void {

  }

  getPokemons():void{
    this.pokemonsService.getPokemons().subscribe((pokemonResponse)=>{
      this.pokemonResponse=pokemonResponse;
      for(const pokemonResult of pokemonResponse.results){
        this.pokemonsService.getPokemon(pokemonResult.name).subscribe((pokemon)=>{
          this.pokemon.push(pokemon);
        });
      }
    });

  }


  onClickPokemon(pokemon: Pokemon): void {
    console.log(this.pokemon);
  }
}
