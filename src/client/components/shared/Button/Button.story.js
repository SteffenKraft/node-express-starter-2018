import React from "react";
import { storiesOf } from "@storybook/react";

// import theme from "../../../styles/theme";
import { IconDone, IconPower, IconFacebook } from "../../shared/Icons";

import Button from "./Button";

storiesOf("Buttons", module)
  .add("all", () => (
    <div>
      <Button>I am the default Button</Button>
      <Button inverse>I am the default inverse Button</Button>
      <Button type="secondary">I am the secondary Button</Button>
      <Button type="secondary" inverse>
        I am the secondary inverse Button
      </Button>
      <Button type="disabled">I am the disabled Button</Button>
      <Button type="disabled" inverse>
        I am the disabled inverse Button
      </Button>
    </div>
  ))
  .add("all fullWidth", () => (
    <div>
      <Button fullWidth>I am the default Button</Button>
      <Button inverse fullWidth>
        I am the default inverse Button
      </Button>
      <Button type="secondary" fullWidth>
        I am the secondary Button
      </Button>
      <Button type="secondary" inverse fullWidth>
        I am the secondary inverse Button
      </Button>
      <Button type="disabled" fullWidth>
        I am the disabled Button
      </Button>
      <Button type="disabled" inverse fullWidth>
        I am the disabled inverse Button
      </Button>
    </div>
  ))
  .add("all with Icon", () => (
    <div>
      <Button>
        <IconDone /> I am the default Button
      </Button>
      <Button inverse>
        <IconDone /> I am the default inverse Button
      </Button>
      <Button type="secondary">
        <IconPower /> I am the secondary Button
      </Button>
      <Button type="secondary" inverse>
        <IconPower /> I am the secondary inverse Button
      </Button>
      <Button type="disabled">
        <IconFacebook /> I am the disabled Button
      </Button>
      <Button type="disabled" inverse>
        <IconFacebook /> I am the disabled inverse Button
      </Button>
    </div>
  ));
