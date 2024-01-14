import Pokedex from "pokedex-promise-v2"
import { useState, useEffect } from 'react'

function PokeList() {

    const [list, setList] = useState('')
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState('')

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
                    return (
                        <div key={key}>{data.name}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default PokeList