import { Injectable } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import * as Papa from 'papaparse';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor() { }

  readPokemonData(filePath: string): Promise<Pokemon[]> {
    return new Promise((resolve, reject) => {
      const results: Pokemon[] = [];
      Papa.parse(filePath, {
        download: true,
        header: true,
        dynamicTyping: true,
        delimiter: ',',
        skipEmptyLines: true,
        worker: true,
        complete: (result) => {
          console.log("res" + JSON.stringify(result));
          result.data.forEach((row: any) => {
            const pokemon: Pokemon = {
              name: row.Name,
              type1: row.Type1,
              type2: row.Type2,
              // Map other fields as necessary
            };
            results.push(pokemon);
          });
          resolve(results);
        },
        error: (error: any) => {
          console.log(error)
          reject(error);
        }
      });
    });
  }

}
