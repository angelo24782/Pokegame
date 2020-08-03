import React from 'react'
import './Pokedex.css'
import Pokecard from './../Pokecard/Pokecard';

function Pokedex(props) {

    const {
        pokemon,
        exp,
        isWinner,
    } = props

    let title = isWinner ? <h1 className='Poxedex-winner'> Winning Hand </h1> : <h1 className='Poxedex-loser'>Losing Hand</h1>

    const result = () => {
        return exp;
    }


    return (
        <div className="Pokedex">

            <button onClick={result}>Play</button>

            {title}

            <h4>Total Experience: {exp}</h4>

            <div className="Poxedex-cards">

                {
                    pokemon.map((p) => (

                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />

                    ))}

            </div>
        </div>
    )
}

export default Pokedex
