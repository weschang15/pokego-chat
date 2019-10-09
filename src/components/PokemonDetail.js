import React from "react";
import styled from "styled-components";
import { capitalize } from "../utils/capitalize";
import { isNumeric } from "../utils/isNumeric";
import { normalize } from "../utils/normalize";

const Container = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  width: 100%;
  h4 {
    margin: 0;
  }
  p {
    margin-left: 0.5em;
  }
`;

function PokemonDetail({ name, value }) {
  return (
    <Container>
      <h4>{normalize(name, "_")}:</h4>
      <p>{!isNumeric(value) ? capitalize(value) : value}</p>
    </Container>
  );
}

export default PokemonDetail;
