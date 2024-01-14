import Pokedex from 'pokedex-promise-v2'

function SearchBar() {

    const P = new Pokedex()
    let pokeList = []
    P.getPokemonsList().then((res) => {
        pokeList = res.results
    })

    function searchHandler(e) {
        pokeList.filter((pokemon) => {
            
        })
    }

    return (
        <div className="SearchBar">
            <label htmlFor="searchInput"></label>
            <input name="searchInput" onChange={searchHandler}></input>
        </div>
    )
}

export default SearchBar