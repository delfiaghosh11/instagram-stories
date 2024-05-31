import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import StoriesPanel from "./StoriesPanel";

describe("StoriesPanel", () => {
  const mockData = {
    setRenderStory: jest.fn(),
  };

  const renderComponent = (mockData: any) =>
    render(<StoriesPanel setRenderStory={mockData.setRenderStory} />);

  it("should render StoriesPanel component correctly", () => {
    const { container } = renderComponent(mockData);
    expect(container).toBeInTheDocument();
  });
});
