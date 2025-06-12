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
  const [loading, setLoading] = useState(true) // sets loading state
  const [error, setError] = useState<string | null>(null) //sets error state

  //Fetch data
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true)
        const data = await getManyPokemon() //calls api
        console.log("fetching data:", data)
        return setPokemonArray(data) //updates state and applys pokemon data
      } catch (error) {
        console.log("unable to fetch Pokemon", error);
        setError("Failed to load Pokemon data")
      } finally {
        setLoading(false)
      }
    }

    fetchPokemon()
  }, [])
  
  if (loading) return <div>Loading Pokemon...</div>
  if (error) return <div>{error}</div>
  if (pokemonArray.length === 0) return <div>No Pokemon found</div>

  return (
    <div className='app'>
      <PokemonTable manyPokemon={pokemonArray}/> 
    </div>
  )
}

export default App