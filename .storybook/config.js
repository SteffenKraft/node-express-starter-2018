import { configure } from "@storybook/react";

import baseStyles from '../src/client/styles/baseStyles';

baseStyles();

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("../src/client/components", true, /.story\.js?$/));
}

configure(loadStories, module);
