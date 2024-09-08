import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokedexTabPage } from './pokedex-tab.page';

import { PokedexTabPageRoutingModule } from './pokedex-tab-routing.module';
import { PokedexDisplayComponent } from './pokedex-display/pokedex-display.component';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PokedexTabPageRoutingModule
  ],
  declarations: [PokedexTabPage, PokedexDisplayComponent, PokedexListComponent]
})
export class PokedexTabPageModule {}
