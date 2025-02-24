// // DashboardCard.test.tsx
// import React from "react";
// import { render, screen } from "@testing-library/react";
// import DashboardCard from "./DashboardCard";
// import { Newspaper } from "lucide-react";

// describe("DashboardCard Component", () => {
//   // Test 1: Renders the component with props
//   it("renders the title, count, and icon correctly", () => {
//     const title = "Total Users";
//     const count = 42;
//     const icon = <Newspaper data-testid="icon" />;

//     // Render the component
//     render(<DashboardCard title={title} count={count} icon={icon} />);

//     // Check if the title is rendered
//     const titleElement = screen.getByText(title);
//     expect(titleElement).toBeInTheDocument();

//     // Check if the count is rendered
//     const countElement = screen.getByText(count.toString());
//     expect(countElement).toBeInTheDocument();

//     // Check if the icon is rendered
//     const iconElement = screen.getByTestId("icon");
//     expect(iconElement).toBeInTheDocument();
//   });

//   // Test 2: Accessibility attributes are applied correctly
//   it("has correct accessibility attributes", () => {
//     const title = "Total Users";
//     const count = 42;
//     const icon = <Newspaper />;

//     // Render the component
//     render(<DashboardCard title={title} count={count} icon={icon} />);

//     // Check if the card has the correct role and aria-label
//     const cardElement = screen.getByRole("region", { name: title });
//     expect(cardElement).toBeInTheDocument();

//     // Check if the title has the correct aria-label
//     const titleElement = screen.getByRole("heading", { name: `${title} card` });
//     expect(titleElement).toBeInTheDocument();

//     // Check if the count has the correct aria-label
//     const countElement = screen.getByText(count.toString());
//     expect(countElement).toHaveAttribute("aria-label", `Count: ${count}`);
//   });
// });