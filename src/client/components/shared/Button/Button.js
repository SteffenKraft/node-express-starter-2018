import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../../../styles/theme";

const ButtonStyled = styled.button`
  display: block;
  border-radius: 3px;
  padding: 10px 30px;
  margin: 20px 0;
  background: ${props =>
    props.inverse ? theme.colors.white : theme.colors.primary};
  color: ${props =>
    props.inverse ? theme.colors.primary : theme.colors.white};
  border: 2px solid ${theme.colors.primary};
  cursor: pointer;
  text-transform: uppercase;
  font-size: ${theme.fontSizes.mediumLarge};
  width: ${props => (props.fullWidth ? "100%" : "auto")};
  outline: none;

  &:hover {
    filter: brightness(105%);
  }
`;

const ButtonStyledSecondary = ButtonStyled.extend`
  background: ${props =>
    props.inverse ? theme.colors.white : theme.colors.secondary};
  color: ${props =>
    props.inverse ? theme.colors.secondary : theme.colors.white};
  border: 2px solid ${theme.colors.secondary};
`;

const ButtonStyledDisabled = ButtonStyled.extend`
  background: ${props =>
    props.inverse ? theme.colors.white : theme.colors.deactive};
  color: ${props =>
    props.inverse ? theme.colors.deactive : theme.colors.white};
  border: 2px solid ${theme.colors.deactive};
  cursor: default;

  &:hover {
    filter: none;
  }
`;

const buttons = {
  default: ButtonStyled,
  secondary: ButtonStyledSecondary,
  disabled: ButtonStyledDisabled,
};

const Button = ({ onClick, type, children, fullWidth, styles, inverse }) => {
  const ButtonType = buttons[type];
  return (
    <ButtonType
      style={styles}
      fullWidth={fullWidth}
      onClick={onClick}
      inverse={inverse}
    >
      {children}
    </ButtonType>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.any.isRequired,
  fullWidth: PropTypes.bool,
  inverse: PropTypes.bool,
  styles: PropTypes.shape({}),
};

Button.defaultProps = {
  onClick: null,
  type: "default",
  fullWidth: false,
  styles: {},
  inverse: false,
};

export default Button;
