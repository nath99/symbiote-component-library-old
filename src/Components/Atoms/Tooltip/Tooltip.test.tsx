/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import Tooltip, { TooltipProps } from "./Tooltip";

describe("Tooltip Component", () => {
    let tooltipProps: TooltipProps;

    beforeEach(() => {
        tooltipProps = {
            label: "Hover me!",
            tooltip: "Hey, I'm a tooltip!"
        }
    });

    const renderComponent = () => render(<Tooltip {...tooltipProps} />);

    it("Should have tooltip class", () => {
        const { getByTestId } = renderComponent();

        const testComponent = getByTestId("tooltip");

        expect(testComponent).toHaveClass("tooltip");
    });
});