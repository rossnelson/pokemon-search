import { SearchResponse } from "./search";

// pokemon model
export interface Pokemon {
	id: number;
	name: string;
	classification: string;
}

// pokemon list with pagination
export interface PokemonSearchResponse extends SearchResponse<Pokemon> { }
