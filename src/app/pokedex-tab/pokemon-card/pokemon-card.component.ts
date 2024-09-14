import { Component, Input, OnInit } from '@angular/core';
import { EffectivenessChart } from 'src/app/models/Effectiveness-Chart';
import { Pokemon } from 'src/app/models/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon!: Pokemon;
  effectivenessChart: EffectivenessChart = new EffectivenessChart([], [], [], [], []);

  constructor() { }

  ngOnInit() {
    this.CalculateOffensiveTypeEffectiveness(this.pokemon.type1);
  }

  CalculateDualOffensiveTypeEffectiveness(type: string) {

  }

  CalculateOffensiveTypeEffectiveness(type: string) {
    let x0: string[] = [],
        x05: string[] = [],
        x1: string[] = [],
        x2: string[] = [],
        x4: string[] = [];

    switch (type) {
      case "normal":
        x0 = ["ghost"];
        x05 = ["rock", "steel"];
        x1 = [];
        x2 = [];
        break;
      case "fire":
        x0 = [];
        x05 = ["fire", "water", "rock", "dragon"];
        x1 = [];
        x2 = ["grass", "ice", "bug", "steel"];
        break;
      case "water":
        x0 = [];
        x05 = ["water", "grass", "dragon"];
        x1 = [];
        x2 = ["fire", "ground", "rock"];
        break;
      case "electric":
        x0 = ["ground"];
        x05 = ["grass", "electric", "dragon"];
        x1 = [];
        x2 = ["water", "flying"];
        break;
      case "grass":
        x0 = [];
        x05 = ["fire", "grass", "poison", "flying", "bug", "dragon", "steel"];
        x1 = [];
        x2 = ["water", "ground", "rock"];
        break;
      case "ice":
        x0 = [];
        x05 = ["fire", "water", "ice", "steel"];
        x1 = ["grass", "ground", "flying", "dragon"];
        x2 = ["fire", "water", "ice", "steel"];
        break;
      case "fighting":
        x0 = ["ghost"];
        x05 = ["poison", "flying", "psychic", "bug", "fairy"];
        x1 = [];
        x2 = ["normal", "ice", "rock", "dark", "steel"];
        break;
      case "poison":
        x0 = ["steel"];
        x05 = ["poison", "ground", "rock", "ghost"];
        x1 = [];
        x2 = ["grass", "fairy"];
        break;
      case "ground":
        x0 = ["flying"];
        x05 = ["grass", "bug"];
        x1 = [];
        x2 = ["fire", "electric", "poison", "rock", "steel"];
        break;
      case "flying":
        x0 = [];
        x05 = ["electric", "rock", "steel"];
        x1 = [];
        x2 = ["grass", "fighting", "bug"];
        break;
      case "psychic":
        x0 = ["dark"];
        x05 = ["psychic", "steel"];
        x1 = [];
        x2 = ["fighting", "poison"];
        break;
      case "bug":
        x0 = [];
        x05 = ["fire", "fighting", "poison", "flying", "ghost", "steel", "fairy"];
        x1 = [];
        x2 = ["grass", "psychic", "dark"];
        break;
      case "rock":
        x0 = [];
        x05 = ["fighting", "ground", "steel"];
        x1 = [];
        x2 = ["fire", "ice", "flying", "bug"];
        break;
      case "ghost":
        x0 = ["normal"];
        x05 = ["dark"];
        x1 = [];
        x2 = ["psychic", "ghost"];
        break;
      case "dragon":
        x0 = ["fairy"];
        x05 = ["steel"];
        x1 = [];
        x2 = ["dragon"];
        break;
      case "dark":
        x0 = [];
        x05 = ["fighting", "dark", "fairy"];
        x1 = [];
        x2 = ["psychic", "ghost"];
        break;
      case "steel":
        x0 = [];
        x05 = ["fire", "water", "electric", "steel"];
        x1 = [];
        x2 = ["ice", "rock", "fairy"];
        break;
      case "fairy":
        x0 = [];
        x05 = ["fire", "poison", "steel"];
        x1 = [];
        x2 = ["fighting", "dragon", "dark"];
        break;
    }

    this.effectivenessChart = new EffectivenessChart(x0, x05, x1, x2, x4);
  }
}
