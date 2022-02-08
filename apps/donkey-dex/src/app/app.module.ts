import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, PokemonsListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
