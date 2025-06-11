import {PokemonService} from '../types/PokemonTypes'

// Props to handle expected data structure 
type Props = {
    pokemon: PokemonService
}

// Displays each vaule inside object per single pokemon
function PokemonCard({pokemon} : Props) {

    const imageUrl = pokemon.sprites.other?.['official-artwork']?.front_default || pokemon.sprites.front_default;

    return (
            <>
            <div>{pokemons.name}</div>
            <img src={pokemons.sprites.front_default} alt="Pokemon sprite" />
            </>
    )
}

export default PokemonCard