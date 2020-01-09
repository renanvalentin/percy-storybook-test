import * as React from "react";

import { storiesOf } from "@storybook/react";

import App from "./App";

storiesOf("To be included", module)
  .addParameters({ percy: { skip: false } })
  .add("included", () => <App />);
