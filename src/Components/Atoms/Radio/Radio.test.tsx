/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

import Radio, { RadioProps } from "./Radio";

    // Add Accessibility testing
expect.extend(toHaveNoViolations)

describe("Radio Component", () => {
    let radioProps: RadioProps;

    beforeEach(() => {
        radioProps = {
            radioItems: [{
                radioLabel: 'Option 1',
                radioValue: '1',
                radioSelected: true
            }, {
                radioLabel: 'Option 2',
                radioValue: '2'
            }]
        }
    });

    const renderComponent = () => render(<Radio {...radioProps} />);

    it("Should have no accessibility violations", async () => {
        const { container } = renderComponent();

        const results = await axe(container)

        expect(results).toHaveNoViolations()
    });

    it("Should have radio class", async () => {
        const { getByTestId } = renderComponent();

        const testButton = await getByTestId("radio");

        expect(testButton).toHaveClass("radio");
    });
});