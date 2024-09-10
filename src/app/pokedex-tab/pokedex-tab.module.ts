import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokedexTabPage } from './pokedex-tab.page';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

import { PokedexTabPageRoutingModule } from './pokedex-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PokedexTabPageRoutingModule
  ],
  declarations: [PokedexTabPage, PokemonCardComponent]
})
export class PokedexTabPageModule {}
