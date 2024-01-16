import Pokedex from "pokedex-promise-v2"
import { useState, useEffect } from 'react'

function PokeList() {

    const [list, setList] = useState(null)
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(null)

    useEffect(() => {
        async function fetchList() {
            try {
                const P = new Pokedex()
                await P.getPokemonsList().then((res) => {
                    setList(res.results)
                    setLoading(false)
                })
            } catch (error) {
                setErr(error)
                setLoading(false)
            }
        }
        fetchList()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    if (err) {
        return <div>Error : {err.message}</div>
    }

    return (
        <div>
            <div className="list-container">
                {list.map((data, key) => {
                    let i = key
                    if (i < 1025) return (
                        <div key={key} id={key+1}>{
                            // let name = data.name
                            // if (name.includes('-')) {
                            //     let splitted = name.split('-')
                            //     splitted
                            // }
                            data.name}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default PokeList