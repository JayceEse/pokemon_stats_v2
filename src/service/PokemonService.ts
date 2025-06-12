import axios from "axios";
import { PokemonListResult, PokemonService } from "../types/PokemonTypes";
import { transformPokeData } from "../utils/TransformPokeData";

export const getManyPokemon = async (): Promise<PokemonService[]> => {
    try {
        //Fetching the list of pokemon
        const listResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=4`);
        const pokemonList: PokemonListResult[] = listResponse.data.results;

        // Fetch and 
        const pokemonDetails = await Promise.all(
            pokemonList.map(async (pokemon) => {
                const detailsResponse = await axios.get(pokemon.url);
                const data = detailsResponse.data

                return transformPokeData(data)
            })
        );

        return pokemonDetails;

    } catch (error) {
        console.log(error)
        throw error
    }
}