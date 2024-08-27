import { Component } from '@angular/core';
import { ActivatedRoute,RouterLink, RouterLinkActive} from '@angular/router';
import * as pokemonData from '../../../assets/json/pokemonData.json';
import { Pokemon } from '../../utils/pokemon';


@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [RouterLink, RouterLinkActive ],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
 
id: number = 1;
pokemon?: Pokemon ;
constructor(private route: ActivatedRoute) {}
ngOnInit(): void {
 this.route.paramMap.subscribe(
    (params) => {
      this.id = Number (params.get('id'));
      console.log(this.id);
      
    }
  );
  this.pokemon=((pokemonData as any).default as Pokemon[])
  .find((pokemon) => pokemon.id == this.id);
}
  
}
