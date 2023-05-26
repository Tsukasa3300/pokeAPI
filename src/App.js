import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from 'styled-components';

function App() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/6');
      setPokemon(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h2>{pokemon.name}</h2>
      {pokemon.sprites && pokemon.sprites.front_default && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
}

export default App;
