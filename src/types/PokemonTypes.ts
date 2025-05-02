// This type is used to define the structure of a single Pokemon object
export type Pokemon = {
    id: number,
    name: string,
    types: {name: string}[],
    sprite: {url: string},
    }