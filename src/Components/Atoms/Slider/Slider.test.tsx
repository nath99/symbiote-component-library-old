/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

import Slider, { SliderProps } from "./Slider";

    // Add Accessibility testing
expect.extend(toHaveNoViolations)

describe("Slider Component", () => {
    let sliderProps: SliderProps;

    beforeEach(() => {
        sliderProps = {
            min: 0,
            max: 100,
            value: 50
        }
    });

    const renderComponent = () => render(<Slider {...sliderProps} />);

    it("Should have no accessibility violations", async () => {
        const { container } = renderComponent();

        const results = await axe(container)

        expect(results).toHaveNoViolations()
    });

    it("Should render", async () => {
        const { getByTestId } = renderComponent();

        const testComponent = await getByTestId("slider");

        expect(testComponent).toHaveClass("slider");
    });
});