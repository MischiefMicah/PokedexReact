import Pokedex from 'pokedex-promise-v2'

function SearchBar() {

    const P = new Pokedex()
    const PList = P.getPokemonsList()
    PList.then((res) => {
        res.results.filter((pokemon) => {
            if (pokemon.name.includes('bulb')) {
                console.log(pokemon)
            } else console.log('false')
        })
    })

    function searchHandler(x) {
        // PList.then((res) => {
        //     res.results.filter((pokemon) => {
        //         return pokemon.name.includes(x)
        //     })
        // })
    }

    return (
        <div className="SearchBar">
            <label htmlFor="searchInput"></label>
            <input name="searchInput" onChange={searchHandler}></input>
        </div>
    )
}

export default SearchBar