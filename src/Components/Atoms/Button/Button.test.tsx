/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import Button, { ButtonProps } from "./Button";

describe("Button Component", () => {
    let buttonProps: ButtonProps;

    beforeEach(() => {
        buttonProps = {
            type: 'primary'
        }
    });

    const renderComponent = () => render(<Button {...buttonProps} />);

    it("Should have primary class", () => {
        const { getByTestId } = renderComponent();

        const primaryButton = getByTestId("button");

        expect(primaryButton).toHaveClass("primary");
    });

    it("Should have secondary class", () => {
        buttonProps.type = 'secondary';
        const { getByTestId } = renderComponent();

        const secondaryButton = getByTestId("button");

        expect(secondaryButton).toHaveClass("secondary");
    });

    it("Should have tertiary class", () => {
        buttonProps.type = 'tertiary';
        const { getByTestId } = renderComponent();

        const tertiaryButton = getByTestId("button");

        expect(tertiaryButton).toHaveClass("tertiary");
    });
});