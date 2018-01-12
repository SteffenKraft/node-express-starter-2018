import styled, { css } from 'styled-components';
import theme from '../../../styles/theme';

const modifyStyles = css`
  margin-top: ${props => props.top && 0};
  text-transform: ${props => props.uppercase && 'uppercase'};
`;

const linkStyles = css`
  color: ${props => (props.link ? theme.colors.primary : theme.colors.text)};
  text-decoration: ${props => (props.link ? 'underline' : 'none')};
  cursor: ${props => (props.link ? 'pointer' : 'default')};
  &:hover {
    filter: ${props => (props.link ? 'brightness(120%)' : 'none')};
  }
`;

export const Display3 = styled.h1`
  font-size: ${theme.fontSizes.display3};
  line-height: 5.6rem;
  margin: 3.7rem 0;
  letter-spacing: -0.112rem;
  ${modifyStyles};
  ${linkStyles};
`;

export const Display2 = styled.h1`
  font-size: ${theme.fontSizes.display2};
  line-height: 4.8rem;
  margin: 3rem 0;
  letter-spacing: normal;
  ${modifyStyles};
  ${linkStyles};
`;

export const Display1 = styled.h1`
  font-size: ${theme.fontSizes.display1};
  line-height: 4rem;
  margin: 2.3rem 0;
  letter-spacing: normal;
  ${modifyStyles};
  ${linkStyles};
`;

export const Headline = styled.h1`
  font-size: ${theme.fontSizes.headline};
  line-height: 3.2rem;
  margin: 1.6rem 0;
  letter-spacing: normal;
  ${modifyStyles};
  ${linkStyles};
`;

export const Title = styled.h2`
  font-size: ${theme.fontSizes.title};
  font-weight: 500;
  line-height: 3.2rem;
  margin: 1.6rem 0;
  letter-spacing: 0.04rem;
  ${modifyStyles};
  ${linkStyles};
`;

export const SubHeadline2 = styled.h3`
  font-size: ${theme.fontSizes.subHeadline2};
  line-height: 2.8rem;
  margin: 1.6rem 0;
  letter-spacing: 0.064rem;
  ${modifyStyles};
  ${linkStyles};
`;

export const SubHeadline1 = styled.h4`
  font-size: ${theme.fontSizes.subHeadline1};
  line-height: 2.4rem;
  margin: 2rem 0;
  letter-spacing: 0.06rem;
  ${modifyStyles};
  ${linkStyles};
`;

export const Paragraph = styled.p`
  margin: 2rem 0;
  ${modifyStyles};
  ${linkStyles};
`;

export const ParagraphBold = Paragraph.extend`
  font-weight: 500;
`;

export const SpanBold = styled.span`
  font-weight: 500;
  ${modifyStyles};
  ${linkStyles};
`;
