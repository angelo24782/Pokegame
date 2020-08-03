import React from 'react'

function Pokecard(props) {
    const { name } = props;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default Pokecard
