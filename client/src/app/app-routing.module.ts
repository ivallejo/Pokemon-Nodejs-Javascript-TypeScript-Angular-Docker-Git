import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './pokedex/pages/items/items.component';
import { MovesComponent } from './pokedex/pages/moves/moves.component';
import { PokemonComponent } from './pokedex/pages/pokemon/pokemon.component';
import { TypesComponent } from './pokedex/pages/types/types.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonComponent,
    pathMatch: 'full'
  },
  {
      path: 'pokemon',
      component: PokemonComponent
  },
  {
      path: 'items',
      component: ItemsComponent
  },
  {
      path: 'types',
      component: TypesComponent
  },
  {
      path: 'moves',
      component: MovesComponent
  },
  {
      path: '**',
      redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
