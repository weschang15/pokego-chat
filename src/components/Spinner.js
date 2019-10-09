import { transparentize } from "polished";
import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border-radius: 50%;
  width: 26px;
  height: 26px;
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: ${({ bgColor }) => `4px solid ${transparentize(0.8, bgColor)}`};
  border-right: ${({ bgColor }) => `4px solid ${transparentize(0.8, bgColor)}`};
  border-bottom: ${({ bgColor }) =>
    `4px solid ${transparentize(0.8, bgColor)}`};
  border-left: ${({ bgColor }) => `4px solid ${bgColor}`};
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: ${animation} 1.1s infinite linear;

  &:after {
    border-radius: 50%;
    width: 26px;
    height: 26px;
  }
`;

export default Spinner;
