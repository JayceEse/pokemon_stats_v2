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

// Type for the detailed Pokemon data
export type PokemonDetails = {
    id: number,
    name: string,
    sprites: {
        front_default: string,
        other?: {
            'offical-artwork'?:{
                front_default: string
            }
        }
    }
    types: {
        type: {
            name: string
        }
    }
}

// For service return type
export type PokemonService = PokemonDetails;