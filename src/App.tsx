import { useEffect, useState } from 'react'
import PokemonTable from './components/PokemonTable'
import { getManyPokemon } from './service/PokemonService'
import { PokemonService } from './types/PokemonTypes'


// Pokemon Object
/* const bulbasaur = {
  id: 1,
  name: 'Bulbasaur',
  types: [{name: 'Grass'}],
  sprite: {url:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'}
  } */

  //Pokemon array
  // const pokemonArray = [
  //   {
  //     id: 1,
  //     name: 'Bulbasaur',
  //     types: [{name: 'Grass'}],
  //     sprite: {url:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'}
  //   },
  //   {
  //     id: 2,
  //     name: 'Bulbasaur',
  //     types: [{name: 'Grass'}],
  //     sprite: {url:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'}
  //   },
  //   {
  //     id: 3,
  //     name: 'Bulbasaur',
  //     types: [{name: 'Grass'}],
  //     sprite: {url:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'}
  //   },
  //   {
  //     id: 4,
  //     name: 'Bulbasaur',
  //     types: [{name: 'Grass'}],
  //     sprite: {url:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'}
  //   }

  // ]

function App() {

  const [pokemonArray, setPokemonArray] = useState<PokemonService[]>([]) //this sets state

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const data = await getManyPokemon() //calls api
        return setPokemonArray(data) //updates state and applys pokemon data
        console.log(data)
      } catch (error) {
        throw new Error("unable to fetch Pokemon");
      }
    }

    fetchPokemon()
  }, [])
  
  

  return (
    <PokemonTable manyPokemon={pokemonArray}/>
  )
}

export default App