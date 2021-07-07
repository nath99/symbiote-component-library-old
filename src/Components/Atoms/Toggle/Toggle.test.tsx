/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import Toggle, { ToggleProps } from "./Toggle";

describe("Toggle Component", () => {
    let toggleProps: ToggleProps;

    beforeEach(() => {
        toggleProps = {
            toggleLabel: 'Test Label'
        }
    });

    const renderComponent = () => render(<Toggle {...toggleProps} />);

    it("Should have toggle class", () => {
        const { getByTestId } = renderComponent();

        const testComponent = getByTestId("toggle");

        expect(testComponent).toHaveClass("toggle");
    });
});