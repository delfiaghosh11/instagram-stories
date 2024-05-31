import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navigation from "./Navigation";

describe("Navigation", () => {
  const renderComponent = () => render(<Navigation />);

  it("should render Navigation component correctly", () => {
    const { container } = renderComponent();
    expect(container).toBeInTheDocument();
  });

  it("should have proper heading", () => {
    const { getByText } = renderComponent();
    expect(getByText("Instagram")).toBeInTheDocument();
  });
});
