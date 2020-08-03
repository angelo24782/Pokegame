import React from 'react';
import './App.css';
import Pokecard from './components/Pokecard';

function App() {
  return (
    <div className="App">
      <Pokecard id={2} name="Charmander" type="fire" exp={62} />
    </div>
  );
}

export default App;
