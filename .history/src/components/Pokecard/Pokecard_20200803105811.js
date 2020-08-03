import React from 'react';
import './Pokecard.css';

function Pokecard(props) {

    //const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;

    const { name, id, type, exp } = props;

    let imgSrc = `${POKE_API}${id}.png`;

    return (
        <div className="Pokecard">
            <h1 className="Pokecard-title" >{name}</h1>
            <img src={imgSrc} alt={name} />
            <div className="Pokecard-data" >Type: {type}</div>
            <div className="Pokecard-data" >EXP: {exp}</div>
        </div>
    )
}

export default Pokecard
