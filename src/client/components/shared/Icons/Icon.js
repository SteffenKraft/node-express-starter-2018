import React from "react";
import PropTypes from "prop-types";

const defaultStyles = {
  display: "inline-block",
  verticalAlign: "middle",
  fill: "currentColor",
  bottom: "0.10em",
  position: "relative",
};

const defaultProps = {
  viewBox: "0 0 24 24",
  height: "1.1em",
  width: "1.1em",
};

const Icon = ({ svgProps, svgStyles, children }) => {
  const props = {
    ...defaultProps,
    ...svgProps,
  };
  const styles = {
    ...defaultStyles,
    ...svgStyles,
  };

  return (
    <svg {...props} style={{ ...styles }}>
      {children}
    </svg>
  );
};

Icon.propTypes = {
  svgProps: PropTypes.object,
  svgStyles: PropTypes.object,
  children: PropTypes.any.isRequired,
};

Icon.defaultProps = {
  svgProps: {},
  svgStyles: {},
};

export default Icon;
