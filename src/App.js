import React, { useState, useEffect } from 'react';
import Pokemon from './components/Pokemon';
import pokemonList from './data/pokemonList';
import { getRandomPokemon } from './utils/randomUtils';

function App() {
  const [playerPokemon, setPlayerPokemon] = useState(null);
  const [enemyPokemon, setEnemyPokemon] = useState(null);

  // Assign random Pokémon when the game starts
  useEffect(() => {
    const player = getRandomPokemon(pokemonList);
    let enemy;
    do {
      enemy = getRandomPokemon(pokemonList);
    } while (enemy.name === player.name); // Ensure different Pokémon for enemy

    setPlayerPokemon(player);
    setEnemyPokemon(enemy);
  }, []);

  return (
    <div>
      <h1>Pokémon Battle Game</h1>
      {playerPokemon && enemyPokemon ? (
        <>
          <h2>Your Pokémon</h2>
          <Pokemon
            name={playerPokemon.name}
            initialHp={playerPokemon.hp}
            image={playerPokemon.image}
          />

          <h2>Enemy Pokémon</h2>
          <Pokemon
            name={enemyPokemon.name}
            initialHp={enemyPokemon.hp}
            image={enemyPokemon.image}
          />
        </>
      ) : (
        <p>Loading Pokémon...</p>
      )}
    </div>
  );
}

export default App;