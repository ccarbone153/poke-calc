import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { Pokemon } from 'src/app/models/Pokemon';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
})
export class PokedexListComponent implements OnInit {

  constructor(private pokedexService: PokedexService) { }

  pokemonData: Pokemon[] = [];

  ngOnInit() {
    const corsProxy = 'https://cors-anywhere.herokuapp.com/';
    const pokemonFilePath = 'https://raw.githubusercontent.com/ccarbone153/poke-calc/csv-debug-testing/src/app/assets/pokemon.csv';

    this.pokedexService.readPokemonData(corsProxy + pokemonFilePath)
      .then(data => {
        this.pokemonData = data;
        console.log('Data loaded successfully');
        console.log(this.pokemonData);
      })
      .catch(error => {
        console.log('Error loading data');
        console.log(error);
      });
  }

}
