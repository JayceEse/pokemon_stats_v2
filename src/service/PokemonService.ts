import axios from "axios";
import { PokemonListResult, PokemonService } from "../types/PokemonTypes";

export const getManyPokemon = async (): Promise<PokemonService[]> => {
    try {
        // Fetch the list of Pokemon
        const listResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=5`);
        const pokemonList: PokemonListResult[] = listResponse.data.results;

        // Fetch details for each Pokmeon
        const pokemonDetails = await Promise.all(
            pokemonList.map(async (pokmeon) => {
                const detailsResponse = await axios.get(pokmeon.url);
                return detailsResponse.data as PokemonService;
            })
        );

        return pokemonDetails;

    } catch (error) {
        console.log(error)
        throw error
    }
}