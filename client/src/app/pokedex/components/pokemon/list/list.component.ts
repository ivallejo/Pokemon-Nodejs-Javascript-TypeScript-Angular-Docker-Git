import { Component, Input } from '@angular/core';
import { Pokemon } from '../../../interfaces/pokemon.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: []
})
export class ListComponent {
  @Input() pokemon: Pokemon[] = [];
  constructor() { }

  pad(num: number, size: number): string {
    let s = num + '';
    while (s.length < size) { s = '0' + s; }
    return s;
  }

  imagen(id: number): string {
    const url = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/${this.pad(id, 3)}.png`;
    return url;
  }
}
