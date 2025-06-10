import axios from "axios";
import { PokemonService } from "../types/PokemonTypes";

export const getManyPokemon = async (): Promise<PokemonService[]> => {
    try {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=5`)
        return data.results
    } catch (error) {
        console.log(error)
        throw error
    }
}