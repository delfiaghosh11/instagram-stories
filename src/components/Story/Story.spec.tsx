import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Story from "./Story";

describe("Story", () => {
  const renderComponent = () => render(<Story />);

  it("should render Story component correctly", () => {
    const { container } = renderComponent();
    expect(container).toBeInTheDocument();
  });
});
