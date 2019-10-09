import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import PokemonDetail from "./PokemonDetail";

const Grid = styled.section`
  display: grid;
  margin: 1em auto;
  grid-template-columns: repeat(2, minmax(90px, 1fr));
  grid-gap: 1em;
  margin-bottom: 5em;
`;

const GridItem = styled.div`
  padding: 0.25em 0.5em;
  border: 1px solid #ccc;

  /* this grid item contains the name of the pokemon, lets move it to the top left position of grid */
  &:nth-of-type(3) {
    grid-row: 1;
    grid-column: 1;
  }

  &:nth-of-type(1),
  &:nth-of-type(4) {
    border-radius: 6px 5em 5em 6px;
  }

  &:nth-of-type(3),
  &:nth-of-type(2) {
    border-radius: 5em 6px 6px 5em;
  }
`;

/**
 * Encapsulating component to isolate individual details, this helps separate concerns.
 * This component should only be concerned with rendering N amount of details and it's own styles
 *
 * @param {Object} props component props
 * @param {array[]} props.details array of tuples with name and value of pokemon detail
 */
function PokemonDetails({ details }) {
  return (
    <>
      <h3>Basic details</h3>
      <Grid>
        {details.map(([name, value], index) => (
          <GridItem key={index}>
            <PokemonDetail name={name} value={value} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
}

PokemonDetails.propTypes = {
  details: PropTypes.array.isRequired
};

export default PokemonDetails;
