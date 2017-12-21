import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const IconDone = ({ svgProps, svgStyles }) => (
  <Icon svgProps={svgProps} svgStyles={svgStyles}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </Icon>
);

IconDone.propTypes = {
  svgProps: PropTypes.object,
  svgStyles: PropTypes.object,
};

IconDone.defaultProps = {
  svgProps: {},
  svgStyles: {},
};

export default IconDone;
