import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Headline,
  Title,
  SubHeadline1,
  SubHeadline2,
  Display1,
  Display2,
  Display3,
  Paragraph,
  ParagraphBold,
  SpanBold,
} from './Typography';

storiesOf('Typography', module)
  .add('all', () => (
    <div>
      <Display3>Display3 - h1</Display3>
      <hr />
      <Display2>Display2 - h1</Display2>
      <hr />
      <Display2>Display2 - h1</Display2>
      <hr />
      <Display1>Display1 - h1</Display1>
      <hr />
      <Headline>Heading - h1</Headline>
      <hr />
      <Title>Title - h2</Title>
      <hr />
      <SubHeadline2>SubHeadline2 - h3</SubHeadline2>
      <hr />
      <SubHeadline1>SubHeadline1 - h4</SubHeadline1>
      <hr />
      <Paragraph>
        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </Paragraph>
      <hr />
      <ParagraphBold>Paragraph. text, calling something out.</ParagraphBold>
      <hr />
      <Paragraph>
        Paragraph with SpanBold. Lorem ipsum dolor <SpanBold>SpanBold</SpanBold>,
        consectetur adipiscing elit
      </Paragraph>
    </div>
  ))
  .add('all no margin-top', () => (
    <div>
      <Display3 top>Display3 - h1</Display3>
      <hr />
      <Display2 top>Display2 - h1</Display2>
      <hr />
      <Display2 top>Display2 - h1</Display2>
      <hr />
      <Display1 top>Display1 - h1</Display1>
      <hr />
      <Headline top>Heading - h1</Headline>
      <hr />
      <Title top>Title - h2</Title>
      <hr />
      <SubHeadline2 top>SubHeadline2 - h3</SubHeadline2>
      <hr />
      <SubHeadline1 top>SubHeadline1 - h4</SubHeadline1>
      <hr />
      <Paragraph top>
        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </Paragraph>
      <hr />
      <ParagraphBold top>Paragraph. text, calling something out.</ParagraphBold>
      <hr />
      <Paragraph top>
        Paragraph with SpanBold. Lorem ipsum dolor <SpanBold>SpanBold</SpanBold>,
        consectetur adipiscing elit
      </Paragraph>
    </div>
  ))
  .add('all uppercase', () => (
    <div>
      <Display3 uppercase>Display3 - h1</Display3>
      <hr />
      <Display2 uppercase>Display2 - h1</Display2>
      <hr />
      <Display2 uppercase>Display2 - h1</Display2>
      <hr />
      <Display1 uppercase>Display1 - h1</Display1>
      <hr />
      <Headline uppercase>Heading - h1</Headline>
      <hr />
      <Title uppercase>Title - h2</Title>
      <hr />
      <SubHeadline2 uppercase>SubHeadline2 - h3</SubHeadline2>
      <hr />
      <SubHeadline1 uppercase>SubHeadline1 - h4</SubHeadline1>
      <hr />
      <Paragraph uppercase>
        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </Paragraph>
      <hr />
      <ParagraphBold uppercase>
        Paragraph. text, calling something out.
      </ParagraphBold>
      <hr />
      <Paragraph>
        Paragraph with SpanBold. Lorem ipsum dolor{' '}
        <SpanBold uppercase>SpanBold</SpanBold>, consectetur adipiscing elit
      </Paragraph>
    </div>
  ));
