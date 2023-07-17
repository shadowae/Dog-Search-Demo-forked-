import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "./Accordion";
import "@testing-library/jest-dom/extend-expect";

describe("Accordion", () => {
  test("renders the accordion title and content", () => {
    const title = "Accordion Title";
    const content = "Accordion Content";

    render(
      <Accordion title={title}>
        <div>{content}</div>
      </Accordion>
    );

    // Assert the title is rendered
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();

    // Assert the content is not initially visible
    const contentElement = screen.queryByText(content);
    expect(contentElement).not.toBeInTheDocument();

    // Click on the accordion title to toggle the content
    fireEvent.click(titleElement);

    // Assert the content becomes visible
    expect(screen.getByText(content)).toBeInTheDocument();

    // Click on the accordion title again to hide the content
    fireEvent.click(titleElement);

    // Assert the content becomes hidden again
    expect(screen.queryByText(content)).not.toBeInTheDocument();
  });
});
