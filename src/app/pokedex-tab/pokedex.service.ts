import { Injectable } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import * as Papa from 'papaparse';
import { pokemonCsvData } from './pokemon-csv-data';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor() { }

  readPokemonDataFromFile() {
    const results: Pokemon[] = [];
    Papa.parse(pokemonCsvData, {
      header: true,
      dynamicTyping: true,
      delimiter: ',',
      skipEmptyLines: true,
      complete: (result) => {
        result.data.forEach((row: any) => {
          const pokemon: Pokemon = {
            name: row.Name,
            type1: row.Type1.toLowerCase(),
            type2: row.Type2?.toLowerCase(),
            total: row.StatTotal,
            hp: row.Hp,
            attack: row.Attack,
            defense: row.Defense,
            spAtk: row.SpAtk,
            spDef: row.SpDef,
            speed: row.Speed,
            generation: row.Generation,
            legendary: row.Legendary === 1,
            image: row.Image
          };
          results.push(pokemon);
        });
      }
    });
    return results;
  }
}
