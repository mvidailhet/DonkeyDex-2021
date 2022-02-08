import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  fetchPokemonList(): Promise<any> {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then(
        (result) => {
          return result.results;
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
