import React from "react";
import { storiesOf } from "@storybook/react";
import map from "lodash/map";

import theme from "../../../styles/theme";
import * as allIcons from "../../shared/Icons";

storiesOf("Icons", module)
  .add("default", () => (
    <div>
      {map(allIcons, (Icon, key) => (
        <p key={key} style={{ margin: "20px" }}>
          <Icon /> {key}
        </p>
      ))}
    </div>
  ))
  .add("with different font size and color", () => (
    <div>
      {map(allIcons, (Icon, key) => (
        <p
          key={key}
          style={{
            margin: "20px",
            fontSize: theme.fontSizes.large,
            color: theme.colors.secondary,
          }}
        >
          <Icon /> {key}
        </p>
      ))}
    </div>
  ));
