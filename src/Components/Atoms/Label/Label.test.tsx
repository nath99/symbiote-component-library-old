/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import Label, { LabelProps } from "./Label";

describe("Label Component", () => {
    let labelProps: LabelProps;

    beforeEach(() => {
        labelProps = {
            labelText: 'Test Label',
            labelStatus: 'success'
        }
    });

    const renderComponent = () => render(<Label {...labelProps} />);

    it("Should have label-success class", () => {
        const { getByTestId } = renderComponent();

        const testComponent = getByTestId("label");

        expect(testComponent).toHaveClass("label-success");
    });

    it("Should have label-warning class", () => {
        labelProps.labelStatus = 'warning';
        const { getByTestId } = renderComponent();

        const testComponent = getByTestId("label");

        expect(testComponent).toHaveClass("label-warning");
    });

    it("Should have label-error class", () => {
        labelProps.labelStatus = 'error';
        const { getByTestId } = renderComponent();

        const testComponent = getByTestId("label");

        expect(testComponent).toHaveClass("label-error");
    });

    it("Should have label-new class", () => {
        labelProps.labelStatus = 'new';
        const { getByTestId } = renderComponent();

        const testComponent = getByTestId("label");

        expect(testComponent).toHaveClass("label-new");
    });

    it("Should have label-info class", () => {
        labelProps.labelStatus = 'info';
        const { getByTestId } = renderComponent();

        const testComponent = getByTestId("label");

        expect(testComponent).toHaveClass("label-info");
    });
});