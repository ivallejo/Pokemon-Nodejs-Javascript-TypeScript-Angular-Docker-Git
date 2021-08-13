import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: []
})
export class SearchComponent {
  termino = '';
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Input() placeholder = '';
  constructor() { }

  buscar(): void {
    this.onEnter.emit( this.termino );
  }
}
