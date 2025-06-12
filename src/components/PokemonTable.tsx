import { PokemonService } from "../types/PokemonTypes"
import PokemonCard from "./PokemonCard"

// Props to handle expected pokeons
type Props = {
    manyPokemon: PokemonService[]
}

// Passing data to component
const PokemonTable = ({manyPokemon}: Props) => {
  return (
    <div >
        {manyPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        ))}
    </div>
  )
}

export default PokemonTable