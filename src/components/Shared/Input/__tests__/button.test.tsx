import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "..";

test("ProductSearchResultItem - should display variant level title", () => {
  render(<Button>Click me</Button>);

  screen.debug();
});
