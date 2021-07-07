/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import Checkbox, { CheckboxProps } from "./Checkbox";

describe("Checkbox Component", () => {
    let checkboxProps: CheckboxProps;

    beforeEach(() => {
        checkboxProps = {
            checkboxLabel: 'Test Label'
        }
    });

    const renderComponent = () => render(<Checkbox {...checkboxProps} />);

    it("Should have checkbox class", () => {
        const { getByTestId } = renderComponent();

        const testButton = getByTestId("checkbox");

        expect(testButton).toHaveClass("checkbox");
    });
});