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
    const corsProxy = 'https://cors-anywhere.herokuapp.com/';
    const pokemonFilePath = 'https://raw.githubusercontent.com/ccarbone153/poke-calc/csv-debug-testing/src/app/assets/pokemon.csv';

    this.pokedexService.readPokemonData(corsProxy + pokemonFilePath)
      .then(data => {
        this.pokemonData = data;
        this.filteredPokemonData = data;
        console.log('Data loaded successfully');
        console.log(this.pokemonData);
      })
      .catch(error => {
        console.log('Error loading data');
        console.log(error);
      });
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
