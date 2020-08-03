import React from 'react'
import './Pokedex.css'
import Pokecard from './../Pokecard/Pokecard';

function Pokedex(props) {

    const {
        pokemon,
        exp,
        isWinner,
        label,
    } = props

    let title = isWinner ? <h1 className='Poxedex-winner'> {label} Winning Hand </h1> : <h1 className='Poxedex-loser'> {label} Losing Hand</h1>

    return (
        <div className="Pokedex">
            {title}

            <h4>Total Experience: {exp}</h4>

            <div className="Poxedex-cards">

                {
                    pokemon.map((p) => (

                        <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_experience} />

                    ))}

            </div>
        </div>
    )
}

export default Pokedex
