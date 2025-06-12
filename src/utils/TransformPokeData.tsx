import { PokemonService, SimplifiedPokemon } from '../types/PokemonTypes'

// Function to structure the data returned
export const transformPokeData = (pokemon: SimplifiedPokemon): PokemonService => {
    return {
        id: pokemon.id,
        name: pokemon.name,
        sprites: { front_default: pokemon.sprites.front_default },
        stats: pokemon.stats,
        types: pokemon.types
    }
}