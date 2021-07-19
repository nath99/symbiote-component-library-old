/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

import Toggle, { ToggleProps } from "./Toggle";

    // Add Accessibility testing
expect.extend(toHaveNoViolations)

describe("Toggle Component", () => {
    let toggleProps: ToggleProps;

    beforeEach(() => {
        toggleProps = {
            toggleLabel: 'Test Label'
        }
    });

    const renderComponent = () => render(<Toggle {...toggleProps} />);

    it("Should have no accessibility violations", async () => {
        const { container } = renderComponent();

        const results = await axe(container)

        expect(results).toHaveNoViolations()
    });

    it("Should have toggle class", async () => {
        const { getByTestId } = renderComponent();

        const testComponent = await getByTestId("toggle");

        expect(testComponent).toHaveClass("toggle");
    });
});