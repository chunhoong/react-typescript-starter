import { render, screen } from "@testing-library/react";
import React from "react";
import LoadingPage from "./LoadingPage";

describe("Loading page", () => {

  it("should render", () => {
    render(<LoadingPage />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  })

});