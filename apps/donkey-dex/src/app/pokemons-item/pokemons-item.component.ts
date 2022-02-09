import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
@Component({
  selector: 'donkey-dex-pokemons-item',
  templateUrl: './pokemons-item.component.html',
  styleUrls: ['./pokemons-item.component.scss'],
})
export class PokemonsItemComponent implements OnInit {
  @Input() pokemon: Pokemon | undefined;

  constructor() {
    console.log(this.pokemon);
  }

  ngOnInit(): void {
    console.log(this.pokemon);
  }
}
