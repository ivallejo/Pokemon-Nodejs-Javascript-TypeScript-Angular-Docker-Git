import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../../interfaces/item.interface';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styles: [
    `
      .card-custom {
        background-image: url('https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png');
        background-position: center;
        background-position-y: 25px;
        background-repeat: no-repeat;cursor:pointer;
        background-size: 10% 20%;"
      }
    `
  ]
})
export class ItemListComponent{

  @Input() item: Item[] = [];
  constructor() { }

}
