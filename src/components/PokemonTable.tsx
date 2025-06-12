import { PokemonService } from "../types/PokemonTypes"
import PokemonCard from "./PokemonCard"

// Props to handle expected pokeons
type Props = {
    manyPokemon: PokemonService[]
}

const PokemonTable = ({manyPokemon}: Props) => {
    // map each pokemon to a card in the table
  return (
    <div >
        {manyPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        ))}
    </div>
  )
}

export default PokemonTable