import { Component } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import { PokedexService } from './pokedex.service';

@Component({
  selector: 'app-pokedex-tab',
  templateUrl: 'pokedex-tab.page.html',
  styleUrls: ['pokedex-tab.page.scss']
})

export class PokedexTabPage {

  constructor(private pokedexService: PokedexService) {}
  
  pokemonData: Pokemon[] = [];
  filteredPokemonData: Pokemon[] = [];

  ngOnInit() {
    this.pokemonData = this.pokedexService.readPokemonDataFromFile()
    this.filteredPokemonData = this.pokemonData;
  }

  filterList(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredPokemonData = this.pokemonData.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchTerm) ||
             pokemon.type1.toLowerCase().includes(searchTerm) ||
             (pokemon.type2 && pokemon.type2.toLowerCase().includes(searchTerm));
    });
  }

}
