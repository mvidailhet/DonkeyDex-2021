import { Component } from '@angular/core';
import { delay } from 'rxjs';
import { Pokemon } from '../../models/pokemon';
import { ApiService, PokemonTypeEnum } from '../../services/api.service';

@Component({
  selector: 'donkey-dex-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss'],
})
export class PokemonsListComponent {
  PokemonTypeEnum = PokemonTypeEnum;
  pokemonTypeToFilter: PokemonTypeEnum | undefined;
  pokemons: Pokemon[] = [];
  isLoading = true;

  constructor(private apiService: ApiService) {
    this.fetchAllPokemons();
  }

  async fetchAllPokemons() {
    this.apiService
      .getPokemonList()
      .pipe(delay(1000))
      .subscribe((pokemons) => {
        this.isLoading = false;
        this.pokemons = pokemons;

        for (let i = 0; i < this.pokemons.length; i++) {
          this.apiService
            .getPokemonData(this.pokemons[i])
            .pipe(delay(1000))
            .subscribe((details: any) => {
              this.pokemons[i] = { ...this.pokemons[i], details };
              //console.log(details);
            });
        }
      });
  }
}
