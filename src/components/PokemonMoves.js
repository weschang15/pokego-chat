import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import PokemonMove from "./PokemonMove";

const Grid = styled.section`
  display: grid;
  grid-gap: 1em;
`;

const GridItem = styled.div`
  padding: 0.25em 0.5em;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

/**
 * Encapsulating component to isolate individual pokemon moves, this helps separate concerns.
 * This component should only be concerned with rendering N amount of details and it's own styles
 *
 * @param {Object} props component props
 * @param {array[]} props.moves array of tuples with name and value of pokemon detail
 */
function PokemonMoves({ moves }) {
  return (
    <>
      <h3>Combat moves</h3>
      <Grid>
        {moves.map((item, index) => {
          // We found out that each array item is an object that contains the data for the move
          // itself so lets destructure that out
          const {
            move: { name }
          } = item;

          return (
            <GridItem key={index}>
              <PokemonMove name={name} />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}

PokemonMoves.propTypes = {
  moves: PropTypes.array.isRequired
};

export default PokemonMoves;
