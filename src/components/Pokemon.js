import React from "react";
import { randomInt } from "../utils/randomInt";
import { Container } from "./Container";
import PokemonDetails from "./PokemonDetails";
import PokemonMoves from "./PokemonMoves";
import PokemonMugshot from "./PokemonMugshot";

function isObject(value) {
  return value && typeof value === "object" && value.constructor === Object;
}

/**
 * Util function to only retrieve properties that have a string as the property value
 *
 * @param {Object} data container of data to filter items from
 *
 * @return {array[]} list of tuples
 */
function getStringProperties(data = {}) {
  return Object.entries(data).filter(
    ([_, value]) => !isObject(value) && !Array.isArray(value)
  );
}

/**
 * Util function responsible for removing only wanted items from an array of tuples
 * by comparing a list of items with the tuples first element
 *
 * @param {mixed|string|array} pluck items to pluck from array
 * @param {array} from list of items to pluck from
 *
 * @return {array[]} list of tuples
 */
function removeUnwanted(pluck, from) {
  // support for either string or array
  const wanted = [...pluck];

  return from.filter(item => wanted.includes(item[0]));
}

function Pokemon({ data }) {
  const { moves, sprites } = data;

  const detailsAsTuples = removeUnwanted(
    ["name", "base_experience", "weight", "height"],
    getStringProperties(data)
  );

  // A pokemon has too many moves! Should we paginate? Let's see how much time
  // I have left, otherwise you only get the first 4 (:

  // NOTE: the array `moves` is not struturally identical to detailsAsTuples`
  // instead, it is an array of objects containing the properties `move` and `version_group_details`
  return (
    <Container>
      <PokemonMugshot sprites={sprites} />
      <PokemonDetails details={detailsAsTuples} />
      <PokemonMoves moves={moves.slice(randomInt(0, 4), randomInt(5, 8))} />
    </Container>
  );
}

export default Pokemon;
