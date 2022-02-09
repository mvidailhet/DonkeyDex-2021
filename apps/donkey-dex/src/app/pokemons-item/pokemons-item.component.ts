import { Component, Input } from '@angular/core';
@Component({
  selector: 'donkey-dex-pokemons-item',
  templateUrl: './pokemons-item.component.html',
  styleUrls: ['./pokemons-item.component.scss'],
})
export class PokemonsItemComponent {
  @Input() pokemon: any | undefined;
}
