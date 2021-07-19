/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

import Button, { ButtonProps } from "./Button";

    // Add Accessibility testing
expect.extend(toHaveNoViolations)

describe("Button Component", () => {
    let buttonProps: ButtonProps,
        buttonText: string;

    beforeEach(() => {
        buttonText = 'Button Test'
        buttonProps = {
            type: 'primary'
        }
    });

    const renderComponent = () => render(<Button {...buttonProps}>{buttonText}</Button>);

    it("Should have no accessibility violations", async () => {
        const { container } = renderComponent();

        const results = await axe(container)

        expect(results).toHaveNoViolations()
    });

    it("Should have primary class", async () => {
        const { getByTestId } = renderComponent();

        const testComponent = await getByTestId("button");

        expect(testComponent).toHaveClass("primary");
    });

    it("Should have secondary class", async () => {
        buttonProps.type = 'secondary';
        const { getByTestId } = renderComponent();

        const testComponent = await getByTestId("button");

        expect(testComponent).toHaveClass("secondary");
    });

    it("Should have md size class", async () => {
        buttonProps.size = 'md';
        const { getByTestId } = renderComponent();

        const testComponent = await getByTestId("button");

        expect(testComponent).toHaveClass("md");
    });

    it("Should have outline-dark class", async () => {
        buttonProps.style = 'outline-dark';
        const { getByTestId } = renderComponent();

        const testComponent = await getByTestId("button");

        expect(testComponent).toHaveClass("outline-dark");
    });

    it("Should be disabled", async () => {
        buttonProps.enabled = false;
        const { getByTestId } = renderComponent();

        const testComponent = await getByTestId("button");

        expect(testComponent).toHaveClass("disabled");
    });
});