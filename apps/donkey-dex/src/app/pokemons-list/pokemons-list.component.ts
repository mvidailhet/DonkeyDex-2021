import { Component } from '@angular/core';

@Component({
  selector: 'donkey-dex-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss'],
})
export class PokemonsListComponent {
  pokemons: any[] = [];

  constructor() {
    this.fetchAllPokemons();
  }

  async fetchAllPokemons() {
    this.pokemons = await this.fetchPokemonList();
  }

  fetchPokemonList() {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((result) => {
        return result.results;
      });
  }
}
