import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  nextPokemonsUrl: string | undefined;

  constructor(private httpClient: HttpClient) {}

  getPokemonData(pokemon: any) {
    return this.httpClient.get(pokemon.url)
    .pipe(
      catchError((error) => {
        console.error(error);
        return of({});
      })
    );
  }

  getPokemonList(): Observable<any> {
    return this.httpClient
      .get('https://pokeapi.co/api/v2/pokemon?limit=10')
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
