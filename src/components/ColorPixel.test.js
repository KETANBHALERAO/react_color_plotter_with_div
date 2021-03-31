import { render, screen } from "@testing-library/react";
import ColorPixel from "./ColoredPixel";
import "@testing-library/jest-dom";

/**
 * This will render ColorPixel Component
 * Checks for no of divs & style attribute
 */
test("renders ColorPixel", async () => {
  render(<ColorPixel data-testid="parent" red={80} green={80} blue={16} />);
  const items = await screen.findAllByRole("div");
  expect(items).toHaveLength(1);
  expect(items[0]).toHaveAttribute(
    "style",
    "background-color: rgb(80, 80, 16); height: 1px; width: 1px;"
  );
});
