import React from 'react'

function Pokecard(props) {

    const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

    const { name, id, type, exp } = props;

    let imgSrc = `${POKE_API}${id}.png`;

    return (
        <div className="Pokecard">
            <h1>{name}</h1>
            <img src={imgSrc} alt={name} />
            <div>Type: {type}</div>
        </div>
    )
}

export default Pokecard
