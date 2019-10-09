import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import { POKEMON_ENDPOINT } from "../config/constants";
import { Container } from "./Container";
import Form from "./Form";
import Input from "./Input";
import Label from "./Label";
import Spinner from "./Spinner";

/**
 * Wrapper component for rendering form and handling query submitting and data retrieval
 *
 * @param {Object} props
 * @param {Function} props.setPokemon state updater
 */
function PokemonSearch({ setPokemon }) {
  const search = useRef(null);
  const [loading, setLoading] = useState(false);
  // Later down the road we can use this to render an appropriate error message
  const [error, setError] = useState(null);

  const searchForPokemon = async e => {
    e.preventDefault();

    try {
      // if an error already exists, lets clear it out
      setError(false);
      // loading! so we can show a spinner
      setLoading(true);

      // DOM input value
      const value = search.current.value;

      // Check if the input is letters only, pokemon don't have numbers in their names
      if (!value.match(/^[A-Za-z]+$/)) {
        throw new Error(`Invalid search query for pokemon: ${value}`);
      }

      // normalize into lowercase for request because that's what the API wants
      const query = value.toLowerCase();
      const res = await fetch(`${POKEMON_ENDPOINT}/${query}`);

      // If the API doesn't have said pokemon, then we should return the 404 not found message
      if (res.status !== 200) {
        throw new Error(res.statusText);
      }

      // deserialize request blob
      const pokemon = await res.json();

      // we're done loading!
      setLoading(false);

      // update the state of pokemon so that app can re-render
      return setPokemon(pokemon);
    } catch (error) {
      // error has been thrown so the entire process has been canceld
      setLoading(false);

      // lets set the error message so that we can display to user
      return setError(error.message);
    }
  };

  return (
    <Container>
      <Form
        onSubmit={searchForPokemon}
        style={{ pointerEvents: loading ? "none" : "all" }}
      >
        <Label htmlFor="search-input">Search for a pokemon</Label>
        <Input
          ref={search}
          type="search"
          id="search-input"
          placeholder="Bulbasaur"
        />
        {loading && <Spinner bgColor="#2978a0" />}
        {error && (
          <>
            <p>
              <strong>{error}</strong>
            </p>
          </>
        )}
      </Form>
    </Container>
  );
}

PokemonSearch.propTypes = {
  setPokemon: PropTypes.func.isRequired
};

export default PokemonSearch;
