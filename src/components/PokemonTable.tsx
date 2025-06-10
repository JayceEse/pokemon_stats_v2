import { PokemonService } from "../types/PokemonTypes"
import PokemonCard from "./PokemonCard"

// Props to handle data structure in a array
type Props = {
    manyPokemon: PokemonService[]
}

const PokemonTable = ({manyPokemon}: Props) => {
    //Function to render each pokemon
    const renderPokemon = () => {
        return (
            manyPokemon.map((pokemon) => {
                return (
                    <PokemonCard pokemons={pokemon}/>
                )
            })
        )
    }

  return (
    <div>{renderPokemon()}</div>
  )
}

export default PokemonTable