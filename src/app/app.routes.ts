import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemosComponent } from './pages/pokemons/pokemos.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { Error404Component } from './pages/error404/error404.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PostsComponent } from './pages/posts/posts.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pokemons', component: PokemosComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'pokemon/:id', component: PokemonComponent },
  { path: 'acercade', component: AcercadeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: Error404Component },
];
