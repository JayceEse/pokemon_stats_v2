import {PokemonService} from '../types/PokemonTypes'

// Props to handle expected data structure 
type Props = {
    pokemons: PokemonService
}

// Displays each vaule inside object per single pokemon
function PokemonCard({pokemons} : Props) {
    return (
            <>
            <div>{pokemons.name}</div>
            <img src={pokemons.sprites.front_default} alt="Pokemon sprite" />
            </>
    )
}

export default PokemonCard