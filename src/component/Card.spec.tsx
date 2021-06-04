import { render, screen } from "@testing-library/react";
import React from "react";
import Card from "./Card";

describe("Card component", () => {
  const title = "Some title";
  const description = "Some description";

  it("should render", () => {
    render(<Card title={title} description={description} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it("should render with id specified", () => {
    const id = "card1";
    const titleId = `${id}-title`;
    const descriptionId = `${id}-description`;
    const { container } = render(<Card title={title} description={description} id={id} />);
    expect(container.querySelector(`#${titleId}`).innerHTML).toBe(title);
    expect(container.querySelector(`#${descriptionId}`).innerHTML).toBe(description);
  });
});
