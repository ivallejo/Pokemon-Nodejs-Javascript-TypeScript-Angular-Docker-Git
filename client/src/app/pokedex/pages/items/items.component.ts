import { Component, OnInit } from '@angular/core';
import { Item, ItemResponse } from '../../interfaces/item.interface';
import { PokedexService } from '../../services/pokedex.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styles: [
  ]
})
export class ItemsComponent implements OnInit {
  termino = '';
  blnError = false;
  item: Item[] = [];

  constructor(private pokemonService: PokedexService) { }

  ngOnInit(): void {
    this.buscar('');
  }

  buscar( termino: string ): void {
    this.termino  = termino;
    console.log('termino =>', this.termino);
    this.pokemonService.searchItem(this.termino)
      .subscribe( (it: ItemResponse) => {
        this.blnError = false;
        this.item = it.body;
      }, (err) => {
          this.blnError = true;
          this.item = [];
      });
  }
}
