import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";

describe("App component", () => {

  it("should render", () => {
    render(<App />);
    expect(screen.getByText("My React application")).toBeInTheDocument();
  });

})