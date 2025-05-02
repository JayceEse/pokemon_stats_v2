import PokemonCard from './components/PokemonCard'


// Pokemon Object
const bulbasaur = {
  id: 1,
  name: 'Bulbasaur',
  types: [{name: 'Grass'}],
  sprite: {url:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'}
  }

  const pokemonArray = [
    {
      id: 1,
      name: 'Bulbasaur',
      types: [{name: 'Grass'}],
      sprite: {url:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'}
    },
    {
      id: 2,
      name: 'Bulbasaur',
      types: [{name: 'Grass'}],
      sprite: {url:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'}
    },
    {
      id: 3,
      name: 'Bulbasaur',
      types: [{name: 'Grass'}],
      sprite: {url:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'}
    },
    {
      id: 4,
      name: 'Bulbasaur',
      types: [{name: 'Grass'}],
      sprite: {url:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'}
    }

  ]

function App() {
  return (
    <PokemonCard pokemons={bulbasaur}/>
  )
}

export default App