import { darken } from "polished";
import styled from "styled-components";
import SearchIcon from "../images/search.svg";

const Input = styled.input.attrs({ type: "search" })`
  border: 1px solid ${darken(0.15, "#e8ecef")};
  border-radius: 3px;
  color: ${darken(0.65, "#e8ecef")};
  padding: 0.5em;
  font-size: 14px;
  background-image: url('${SearchIcon}');
  background-repeat: no-repeat;
  background-size: 1em;
  background-position: 0.5em center;
  /* indent twice as much to pass icon and half as much to provide normal margin */
  text-indent: 1.5em;
`;

export default Input;
