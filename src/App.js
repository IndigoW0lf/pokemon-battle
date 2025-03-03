import React from 'react';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div>
      <h1>Pokémon Battle Game</h1>
      <Pokemon
        name="Pikachu"
        initialHp={100}
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
      />
      <Pokemon
        name="Charmander"
        initialHp={90}
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
      />
    </div>
  );
}

export default App;