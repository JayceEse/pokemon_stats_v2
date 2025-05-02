import { Pokemon } from "../types/PokemonTypes"
import PokemonCard from "./PokemonCard"

// Props to handle data structure in a array
type Props = {
    manyPokemon: Pokemon[]
}

const PokemonTable = ({manyPokemon}: Props) => {
    //Function to render each pokemon
    const renderPokemon = () => {
        return (
            manyPokemon.map((manyPokemon) => {
                return (
                    <PokemonCard pokemons={manyPokemon}/>
                )
            })
        )
    }

  return (
    <div>{renderPokemon()}</div>
  )
}

export default PokemonTable