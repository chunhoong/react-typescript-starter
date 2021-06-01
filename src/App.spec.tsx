import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

describe("App component", () => {

  it("should render", () => {
    render(<App />);
    expect(screen.getByText("My React application")).toBeInTheDocument();
  });

});