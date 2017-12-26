import React from "react";
import styled from "styled-components";

import Sheep from "./sheep.jpg";
import Button from "../shared/Button/Button";
import { IconDone, IconPower, IconFacebook } from "../shared/Icons";

const Intro = styled.div`
  background-image: url(${Sheep});
  height: calc(100vw / 4);
  background-size: contain;
  width: calc(100vw / 2);
`;

const handleClick = () => {
  // console.log("clicked");
};

const HomeView = () => (
  <div>
    <Intro />
    <br />
    <IconDone />
    <IconFacebook />
    <IconPower />
    <Button onClick={handleClick}>
      <IconDone /> I am the default Button
    </Button>
    <Button inverse onClick={handleClick}>
      <IconDone /> I am a inverse default Button
    </Button>
    <Button fullWidth type="secondary" onClick={handleClick}>
      <IconFacebook svgStyles={{ fill: "currentColor" }} /> I am A secondary
      Button
    </Button>
    <Button inverse fullWidth type="secondary" onClick={handleClick}>
      <IconPower /> I am a inverse secondary Button
    </Button>
    <Button type="disabled">
      <IconPower svgProps={{ width: "40px", height: "40px" }} /> I am the
      disabled Button
    </Button>
    <Button inverse type="disabled">
      I am a inverse disabled Button
    </Button>
  </div>
);

export default HomeView;
