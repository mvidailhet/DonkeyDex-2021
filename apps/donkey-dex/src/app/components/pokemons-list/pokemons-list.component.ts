import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'donkey-dex-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss'],
})
export class PokemonsListComponent {
  pokemons: any[] = [];

  constructor(private apiService: ApiService) {}

  async fetchAllPokemons() {
    this.pokemons = await this.apiService.fetchPokemonList();
  }
}
