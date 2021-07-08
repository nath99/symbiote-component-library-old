/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import Radio, { RadioProps } from "./Radio";

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

    it("Should have radio class", () => {
        const { getByTestId } = renderComponent();

        const testButton = getByTestId("radio");

        expect(testButton).toHaveClass("radio");
    });
});