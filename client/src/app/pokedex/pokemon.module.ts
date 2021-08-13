import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { ItemsComponent } from './pages/items/items.component';
import { MovesComponent } from './pages/moves/moves.component';
import { TypesComponent } from './pages/types/types.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/common/search/search.component';
import { ListComponent } from './components/pokemon/list/list.component';
import { ItemListComponent } from './components/items/item-list/item-list.component';

@NgModule({
  declarations: [
    PokemonComponent,
    ItemsComponent,
    MovesComponent,
    TypesComponent,
    SearchComponent,
    ListComponent,
    ItemListComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PokemonComponent, ItemsComponent, MovesComponent, TypesComponent
  ]
})
export class PokemonModule { }
