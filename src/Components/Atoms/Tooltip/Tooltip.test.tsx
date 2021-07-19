/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

import Tooltip, { TooltipProps } from "./Tooltip";

    // Add Accessibility testing
expect.extend(toHaveNoViolations)

describe("Tooltip Component", () => {
    let tooltipProps: TooltipProps;

    beforeEach(() => {
        tooltipProps = {
            label: "Hover me!",
            tooltip: "Hey, I'm a tooltip!"
        }
    });

    const renderComponent = () => render(<Tooltip {...tooltipProps} />);

    it("Should have no accessibility violations", async () => {
        const { container } = renderComponent();

        const results = await axe(container)

        expect(results).toHaveNoViolations()
    });

    it("Should have tooltip class", async () => {
        const { getByTestId } = renderComponent();

        const testComponent = await getByTestId("tooltip");

        expect(testComponent).toHaveClass("tooltip");
    });
});