import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Figure = styled.figure`
  margin: 0;
`;

function PokemonMugshot({ sprites }) {
  return (
    <Figure>
      <img src={sprites.front_default} alt="Pokemon front" />
    </Figure>
  );
}

PokemonMugshot.propTypes = {
  sprites: PropTypes.object.isRequired
};

export default PokemonMugshot;
