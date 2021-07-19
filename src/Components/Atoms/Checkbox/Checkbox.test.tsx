/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

import Checkbox, { CheckboxProps } from "./Checkbox";

    // Add Accessibility testing
expect.extend(toHaveNoViolations)

describe("Checkbox Component", () => {
    let checkboxProps: CheckboxProps;

    beforeEach(() => {
        checkboxProps = {
            checkboxLabel: 'Test Label'
        }
    });

    const renderComponent = () => render(<Checkbox {...checkboxProps} />);

    it("Should have no accessibility violations", async () => {
        const { container } = renderComponent();

        const results = await axe(container)

        expect(results).toHaveNoViolations()
    });

    it("Should have checkbox class", async () => {
        const { getByTestId } = renderComponent();

        const testComponent = await getByTestId("checkbox");

        expect(testComponent).toHaveClass("checkbox");
    });
});