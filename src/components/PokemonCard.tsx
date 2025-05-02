import {Pokemon} from '../types/PokemonTypes'

// Props to handle expected data structure 
type Props = {
    pokemons: Pokemon
}

// Displays each vaule inside object per single pokemon
function PokemonCard({pokemons} : Props) {
    return (
            <>
            <div>{pokemons.id}</div>
            <div>{pokemons.name}</div>
            <div>{pokemons.types.map((pokemon)=> (
                <div>{pokemon.name}</div>
            ))}</div>
            <img src={pokemons.sprite.url} alt="Pokemon Sprite" />
            </>
    )
}

export default PokemonCard