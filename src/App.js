import React from "react";
import "./App.css";
import { Container } from "./components/Container";
import Pokemon from "./components/Pokemon";
import PokemonContainer from "./components/PokemonContainer";
import PokemonSearch from "./components/PokemonSearch";

function App() {
  return (
    <div className="App">
      <PokemonContainer>
        {({ pokemon, setPokemon }) => (
          <>
            <Container>
              <h1>Looking for some quick details on your favorite pokemon?</h1>
              <p>Give it a quick search and pull up some at a glance info!</p>
            </Container>
            <PokemonSearch setPokemon={setPokemon} />
            {pokemon && <Pokemon data={pokemon} />}
          </>
        )}
      </PokemonContainer>
    </div>
  );
}

export default App;
