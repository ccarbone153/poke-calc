import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexTabPage } from './pokedex-tab.page';

const routes: Routes = [
  {
    path: '',
    component: PokedexTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexTabPageRoutingModule {}
