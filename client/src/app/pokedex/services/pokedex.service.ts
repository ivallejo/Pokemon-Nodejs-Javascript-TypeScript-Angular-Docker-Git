import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResponse } from '../interfaces/pokemon.interface';
import { environment } from '../../../environments/environment';
import { ItemResponse } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private apiUrl = environment.baseUrl;
  constructor( private http: HttpClient) { }

  searchPokemon(termino: string): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(`${this.apiUrl}/pokemon/${termino}`);
  }

  searchItem(termino: string): Observable<ItemResponse> {
    return this.http.get<ItemResponse>(`${this.apiUrl}/items/${termino}`);
  }
}
