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
            <div>{pokemon.id}</div>
            <div>{pokemon.name}</div>
            {imageUrl && <img src={imageUrl} alt={`${pokemon.name} sprite`}/>}
            <div>
                {pokemon.types.type.name}
            </div>
            </>
    )
}

export default PokemonCard