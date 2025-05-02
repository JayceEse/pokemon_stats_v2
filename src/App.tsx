import PokemonCard from './components/PokemonCard'


// Pokemon Object
const bulbasaur = {
  id: 1,
  name: 'Bulbasaur',
  types: [{name: 'Grass'}],
  sprite: {url:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'}
  }

function App() {
  return (
    <PokemonCard pokemons={bulbasaur}/>
  )
}

export default App