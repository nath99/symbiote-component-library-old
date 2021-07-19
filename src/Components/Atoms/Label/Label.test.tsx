/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

import Label, { LabelProps } from "./Label";

    // Add Accessibility testing
expect.extend(toHaveNoViolations)

describe("Label Component", () => {
    let labelProps: LabelProps;

    beforeEach(() => {
        labelProps = {
            labelText: 'Test Label',
            labelStatus: 'success'
        }
    });

    const renderComponent = () => render(<Label {...labelProps} />);

    it("Should have no accessibility violations", async () => {
        const { container } = renderComponent();

        const results = await axe(container)

        expect(results).toHaveNoViolations()
    });

    it("Should have label-success class", async () => {
        const { getByTestId } = renderComponent();

        const testComponent = await getByTestId("label");

        expect(testComponent).toHaveClass("label-success");
    });

    it("Should have label-warning class", async () => {
        labelProps.labelStatus = 'warning';
        const { getByTestId } = renderComponent();

        const testComponent = await getByTestId("label");

        expect(testComponent).toHaveClass("label-warning");
    });

    it("Should have label-error class", async () => {
        labelProps.labelStatus = 'error';
        const { getByTestId } = renderComponent();

        const testComponent = await getByTestId("label");

        expect(testComponent).toHaveClass("label-error");
    });

    it("Should have label-new class", async () => {
        labelProps.labelStatus = 'new';
        const { getByTestId } = renderComponent();

        const testComponent = await getByTestId("label");

        expect(testComponent).toHaveClass("label-new");
    });

    it("Should have label-info class", async () => {
        labelProps.labelStatus = 'info';
        const { getByTestId } = renderComponent();

        const testComponent = await getByTestId("label");

        expect(testComponent).toHaveClass("label-info");
    });
});