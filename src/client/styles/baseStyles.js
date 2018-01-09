import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import theme from './theme';

/* stylelint-disable */
const baseStyles = () => injectGlobal`
  ${reset}

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500');

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: ${theme.fontSizes.body};
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: 0.056rem;
    color: ${theme.colors.dark};
  }

  hr {
    margin: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export default baseStyles;
