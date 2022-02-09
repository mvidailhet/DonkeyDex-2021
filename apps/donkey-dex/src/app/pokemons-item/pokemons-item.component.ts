import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'donkey-dex-pokemons-item',
  templateUrl: './pokemons-item.component.html',
  styleUrls: ['./pokemons-item.component.scss'],
})
export class PokemonsItemComponent implements OnInit {
  @Input() pokemon: any | undefined;
  details: any | undefined;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPokemonData(this.pokemon).subscribe((data) => {
      this.details = data;
      console.log(this.details);
    });
  }
}
