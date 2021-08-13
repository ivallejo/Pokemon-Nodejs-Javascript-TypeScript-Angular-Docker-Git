import { Component, OnInit } from '@angular/core';
import { PokemonResponse, Pokemon } from '../../interfaces/pokemon.interface';
import { PokedexService } from '../../services/pokedex.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styles: [
  ]
})
export class PokemonComponent implements OnInit {

  termino = '';
  blnError = false;
  pokemon: Pokemon[] = [];

  constructor(private pokemonService: PokedexService) { }

  ngOnInit(): void {
    this.buscar('');
  }

  buscar( termino: string ): void {
    this.termino  = termino;
    console.log('termino =>', this.termino);
    this.pokemonService.searchPokemon(this.termino)
      .subscribe( (poke: PokemonResponse) => {
        this.blnError = false;
        this.pokemon = poke.body;
      }, (err) => {
          this.blnError = true;
          this.pokemon = [];
      });
  }

}
