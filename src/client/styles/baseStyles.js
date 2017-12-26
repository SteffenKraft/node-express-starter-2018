import { injectGlobal } from "styled-components";
import reset from "styled-reset";
import theme from "./theme";

/* stylelint-disable */
const baseStyles = () => injectGlobal`
  ${reset}

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    font-size: ${theme.fontSizes.medium};
    color: ${theme.colors.dark}
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export default baseStyles;
