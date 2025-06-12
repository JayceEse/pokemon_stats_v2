import {PokemonService} from '../types/PokemonTypes'

// Props to handle expected data structure 
type Props = {
    pokemon: PokemonService
}

// Displays each vaule inside object per single pokemon
function PokemonCard({pokemon} : Props) {

    return (
            <>
            <div>{pokemon.id}</div>
            <div>{pokemon.name}</div>
            <img src={pokemon.sprites.front_default} alt={`${pokemon.name}`} />
            <div>
                {pokemon.stats.map((stat, index) => (
                    <div key={index}>
                        {stat.stat.name}: {stat.base_stat}
                    </div>
                ))}
            </div>
            <div>
                {pokemon.types.map((type, index) => (
                    <div key={index}>
                        {type.type.name}
                    </div>
                ))}
            </div>
            </>
    )
}

export default PokemonCard