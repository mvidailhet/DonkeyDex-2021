import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'donkey-dex-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss'],
})
export class PokemonsListComponent {
  pokemons: any[] = [];

  constructor(private apiService: ApiService) {
    this.fetchAllPokemons();
  }

  async fetchAllPokemons() {
    this.apiService.getPokemonList().subscribe((pokemons) => {
      this.pokemons = pokemons;

      for (let i = 0; i < this.pokemons.length; i++) {
        this.apiService.getPokemonData(this.pokemons[i]).subscribe((data) => {
          this.pokemons[i] = { ...this.pokemons[i], data };
        });
      }
    });
  }
}
