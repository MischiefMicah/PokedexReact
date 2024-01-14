import './App.css';
import SearchBar from './components/SearchBar';
import PokeList from './components/PokeList';

function App() {

  // const P = new Pokedex()
  // P.getPokemonsList().then((response) => {
  //   console.log(response)
  // })

  return (
    <div className="App">
      <SearchBar></SearchBar>
      <PokeList></PokeList>
    </div>
  );
}

export default App;
