import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const randomId = Math.floor(Math.random() * 898) + 1;
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
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
