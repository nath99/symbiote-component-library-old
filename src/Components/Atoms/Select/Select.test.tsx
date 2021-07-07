/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import Select, { SelectProps } from "./Select";

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

    it("Should have select class", () => {
        const { getByTestId } = renderComponent();

        const testComponent = getByTestId("select");

        expect(testComponent).toHaveClass("select");
    });
});