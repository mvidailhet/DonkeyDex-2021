import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  nextPokemonsUrl: string | undefined;

  constructor(private httpClient: HttpClient) {}

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

  getPokemonList(): Observable<any> {
    return this.httpClient
      .get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .pipe(
        catchError((error) => {
          console.error(error);
          return of([]);
        }),
        tap((response: any) => (this.nextPokemonsUrl = response.next)),
        map((response) => response.results)
      );
  }
}
