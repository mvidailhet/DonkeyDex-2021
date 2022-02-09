import { Pipe, PipeTransform } from '@angular/core';
import {
  Pokemon,
  PokemonType,
} from '../models/pokemon';
import { PokemonTypeEnum } from '../services/api.service';

@Pipe({
  name: 'pokemonTypeFilter',
  pure: false,
})
export class PokemonTypeFilterPipe implements PipeTransform {
  transform(
    pokemons: Pokemon[],
    type: PokemonTypeEnum | undefined | string
  ): Pokemon[] {
    if (!pokemons || !type || type === '') return pokemons;
    const lowerCaseType = type.toLowerCase();
    return pokemons.filter((pokemon) => {
      const index = pokemon.details?.types.findIndex(
        (pokemonType: PokemonType) => pokemonType.type.name === lowerCaseType
      );
      return index !== undefined && index > -1;
    });
  }
}
