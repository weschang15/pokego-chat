import { darken } from "polished";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { POKEMON_MOVE_ENDPOINT } from "../config/constants";
import { normalize } from "../utils/normalize";

const FlexGrid = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Pills = styled.div`
  display: flex;
`;

const Pill = styled.span`
  border-radius: 40px;
  font-size: 12px;
  font-weight: 600;
  margin-right: 1em;
  padding: 0.5em;
  ${({ title }) => {
    // Function for determining which background and color combo to use
    switch (title) {
      case "Type":
        return `
          background-color: #e8ecef;
          border: 1px solid ${darken(0.15, "#e8ecef")};
          color: ${darken(0.65, "#e8ecef")}
        `;
      case "Power":
        return `
          background-color: #92dce5;
          border: 1px solid ${darken(0.15, "#92dce5")};
          color: ${darken(0.65, "#92dce5")}
        `;
      case "Accuracy":
        return `
          background-color: #63c7b2;
          border: 1px solid ${darken(0.15, "#63c7b2")};
          color: ${darken(0.65, "#63c7b2")}
        `;
      default:
        return;
    }
  }}

  &:last-of-type {
    margin: 0;
  }
`;

function PokemonMove({ name }) {
  const [info, setInfo] = useState(null);

  // The inital request to retrieve pokemon doesn't return detailed info on moves
  // so we make a request to API here
  useEffect(() => {
    const getMoveInfo = async () => {
      const res = await fetch(`${POKEMON_MOVE_ENDPOINT}/${name}`);
      const data = await res.json();
      setInfo(data);
    };

    getMoveInfo();
  }, [name, setInfo]);

  return (
    <FlexGrid>
      <h5>{normalize(name, "-")}</h5>
      {info && (
        <>
          <Pills>
            <Pill title="Type">{`Type ${info.type.name}`}</Pill>
            <Pill title="Power">
              {info.power ? `Power ${info.power}` : "Power --"}
            </Pill>
            <Pill title="Accuracy">
              {info.accuracy ? `Accuracy ${info.accuracy}` : "Accuracy --%"}
            </Pill>
          </Pills>
        </>
      )}
    </FlexGrid>
  );
}

export default PokemonMove;
