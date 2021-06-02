import { render, screen } from "@testing-library/react";
import React from "react";
import DashboardPage from "./DashboardPage";

describe("Dashboard page", () => {

  it("should render", () => {
    const { container } = render(<DashboardPage />);
    const cardHolders = container.getElementsByClassName("card-holder");

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(cardHolders.length).toBe(1);
    expect(cardHolders[0].childElementCount).toBe(4);
  });

})