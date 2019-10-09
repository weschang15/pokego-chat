import { useState } from "react";

/**
 * Top level component that makes use of render props so that we can cleanly pass local state and its
 * updater function to a child component.
 */
function PokemonContainer({ children }) {
  const [pokemon, setPokemon] = useState(null);
  return children({ pokemon, setPokemon });
}

export default PokemonContainer;
