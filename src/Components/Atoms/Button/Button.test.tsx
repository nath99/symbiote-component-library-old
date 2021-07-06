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

        const testButton = getByTestId("button");

        expect(testButton).toHaveClass("primary");
    });

    it("Should have secondary class", () => {
        buttonProps.type = 'secondary';
        const { getByTestId } = renderComponent();

        const testButton = getByTestId("button");

        expect(testButton).toHaveClass("secondary");
    });

    it("Should have md size class", () => {
        buttonProps.size = 'md';
        const { getByTestId } = renderComponent();

        const testButton = getByTestId("button");

        expect(testButton).toHaveClass("md");
    });

    it("Should have outline-dark class", () => {
        buttonProps.style = 'outline-dark';
        const { getByTestId } = renderComponent();

        const testButton = getByTestId("button");

        expect(testButton).toHaveClass("outline-dark");
    });

    it("Should be disabled", () => {
        buttonProps.enabled = false;
        const { getByTestId } = renderComponent();

        const testButton = getByTestId("button");

        expect(testButton).toHaveClass("disabled");
    });
});