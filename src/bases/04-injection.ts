import {
	HttpAdapter,
	PokeApiAdapter,
	PokeApiFetchAdapter,
} from "../api/pokeApi.adapter";
import { Move, PokemonAPI } from "../interfaces/pokeapi.interface";

export class Pokemon {
	get imageUrl(): string {
		return `https://pokemon.com/${this.id}.jpg`;
	}

	constructor(
		public readonly id: number,
		public name: string,
		private readonly http: HttpAdapter
	) {}

	scream() {
		console.log(`${this.name.toUpperCase()}!!!`);
	}

	speak() {
		console.log(`${this.name}, ${this.name}`);
	}

	async getMoves(): Promise<Move[]> {
		const data = await this.http.get<PokemonAPI>(
			"https://pokeapi.co/api/v2/pokemon/4"
		);

		return data.moves;
	}
}

const pokeApi = new PokeApiAdapter();
export const charmander = new Pokemon(
	4,
	"Charmander",
	new PokeApiFetchAdapter()
);
export const squirtle = new Pokemon(4, "Charmander", new PokeApiAdapter());

charmander.getMoves();
