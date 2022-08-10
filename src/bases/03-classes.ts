import axios from "axios";
import { PokemonAPI } from "../interfaces/pokeapi.interface";

export class Pokemon {
	public id: number;
	public name: string;

	get imageUrl(): string {
		return `https://pokemon.com/${this.id}.jpg`;
	}

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}

	scream() {
		console.log(`${this.name.toUpperCase()}!!!`);
	}
	speak() {
		console.log(`${this.name} ${this.name}`);
	}

	async promises(): Promise<PokemonAPI> {
		const moves = 10;

		const { data } = await axios.get<PokemonAPI>(
			"https://pokeapi.co/api/v2/pokemon/4"
		);
		console.log(data.game_indices);

		return data;
	}
}

export class Digimon {
	constructor(public readonly id: number, public name: string) {}
}
