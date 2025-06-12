// This type is used to define the structure of a single Pokemon object
// export type Pokemon = {
//     id: number,
//     name: string,
//     types: {name: string}[],
//     sprite: {url: string},
//     }

// Type for initial list response
export type PokemonListResult = {
    name: string,
    url: string 
}

export type PokemonStat = {
    base_stat: number,
    stat: {
        name: string
    }
}

export type PokemonType = {
    type: {
        name: string
    }
}

// Type for the detailed Pokemon data
export type SimplifiedPokemon = {
    id: number,
    name: string,
    sprites: {
        front_default: string
    },
    stats: PokemonStat[],
    types: PokemonType[]
}

// For service return type
export type PokemonService = SimplifiedPokemon;