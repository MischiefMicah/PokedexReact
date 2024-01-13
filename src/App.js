import logo from './logo.svg';
import './App.css';
import Pokedex from 'pokedex-promise-v2'
import SearchBar from './components/SearchBar';

function App() {

  const P = new Pokedex()
  // P.getPokemonsList().then((response) => {
  //   console.log(response)
  // })

  return (
    <div className="App">
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
