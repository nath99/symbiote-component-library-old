/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

import ProgressBar, { ProgressBarProps } from "./ProgressBar";

    // Add Accessibility testing
expect.extend(toHaveNoViolations)

describe("Progress Bar Component", () => {
    let progressBarProps: ProgressBarProps;

    beforeEach(() => {
        progressBarProps = {
            progressSteps: [
                {label: 'Step 1', complete: true},
                {label: 'Step 2', complete: false},
                {label: 'Step 3', complete: false}
            ]
        }
    });

    const renderComponent = () => render(<ProgressBar {...progressBarProps} />);

    it("Should have no accessibility violations", async () => {
        const { container } = renderComponent();

        const results = await axe(container)

        expect(results).toHaveNoViolations()
    });

    it("Should have progress-bar class", async () => {
        const { getByTestId } = renderComponent();

        const testComponent = await getByTestId("progress-bar");

        expect(testComponent).toHaveClass("progress-bar");
    });
});