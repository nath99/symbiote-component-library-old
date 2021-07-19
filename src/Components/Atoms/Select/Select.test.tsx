/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

import Select, { SelectProps } from "./Select";

    // Add Accessibility testing
expect.extend(toHaveNoViolations)

describe("Select Component", () => {
    let selectProps: SelectProps;

    beforeEach(() => {
        selectProps = {
            selectLabel: 'Test Label',
            selectItems: [
                {label: 'Option 1'},
                {label: 'Option 2'}
            ]
        }
    });

    const renderComponent = () => render(<Select {...selectProps} />);

    it("Should have no accessibility violations", async () => {
        const { container } = renderComponent();

        const results = await axe(container)

        expect(results).toHaveNoViolations()
    });

    it("Should have select class", async () => {
        const { getByTestId } = renderComponent();

        const testComponent = await getByTestId("select");

        expect(testComponent).toHaveClass("select");
    });
});