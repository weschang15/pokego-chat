import { darken } from "polished";
import PropTypes from "prop-types";
import styled from "styled-components";

const Form = styled.form`
  position: relative;

  button {
    border-radius: 3px;
    font-size: 14px;
    border: 1px solid ${darken(0.05, "#2978a0")};
    background-color: #2978a0;
    margin-left: 1em;
  }

  input[type="search"] {
    width: 100%;
  }
`;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

Form.defaultProps = {
  onSubmit: () => null
};

export default Form;
