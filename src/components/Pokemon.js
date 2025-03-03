import React, { useState } from 'react';


function Pokemon({ name, image, initialHp }) {
  const [hp, setHp] = useState(initialHp);

  // Function to decrease HP
  const handleAttack = () => {
    if (hp > 0) {
      setHp(Math.max(0, hp - 10));
    }
  };

  return (
    <div className="pokemon">
      <h2>{name}</h2>
      <img src={image} alt={name} width="100" />
      <p>HP: {hp}</p>
      <button onClick={handleAttack}>Attack</button>
    </div>
  );
}

export default Pokemon;