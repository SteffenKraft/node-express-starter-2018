import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const defaultSvgProps = {
  viewBox: "0 0 21 24",
};
const defaultSvgStyles = {
  bottom: "0.08em",
  fill: "#3b5998",
};

const IconFacebook = ({ svgProps, svgStyles }) => (
  <Icon
    svgProps={{
      ...defaultSvgProps,
      ...svgProps,
    }}
    svgStyles={{
      ...defaultSvgStyles,
      ...svgStyles,
    }}
  >
    <path d="M16.714 1.714c2.129 0 3.857 1.728 3.857 3.857v12.857c0 2.129-1.728 3.857-3.857 3.857h-2.518v-7.969h2.665l0.402-3.107h-3.067v-1.982c0-0.897 0.241-1.5 1.54-1.5l1.634-0.013v-2.772c-0.281-0.040-1.259-0.121-2.384-0.121-2.371 0-4.004 1.446-4.004 4.098v2.29h-2.679v3.107h2.679v7.969h-7.125c-2.129 0-3.857-1.728-3.857-3.857v-12.857c0-2.129 1.728-3.857 3.857-3.857h12.857z" />
  </Icon>
);

IconFacebook.propTypes = {
  svgProps: PropTypes.object,
  svgStyles: PropTypes.object,
};

IconFacebook.defaultProps = {
  svgProps: {},
  svgStyles: {},
};

export default IconFacebook;
