import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { PokemonsItemComponent } from './pokemons-item/pokemons-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListLoaderComponent } from './components/list-loader/list-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    PokemonsListComponent,
    PokemonsItemComponent,
    ListLoaderComponent,
  ],
  imports: [BrowserModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
