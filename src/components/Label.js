import { darken } from "polished";
import styled from "styled-components";

const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5em;
  font-size: 14px;
  color: ${darken(0.25, "#e8ecef")};
  font-weight: 600;
  text-transform: uppercase;
`;

export default Label;
