import Pokedex from 'pokedex-promise-v2'

function SearchBar() {

    function searchHandler(e) {

    }

    return (
        <div className="SearchBar">
            <label htmlFor="searchInput"></label>
            <input name="searchInput" onChange={searchHandler}></input>
        </div>
    )
}

export default SearchBar