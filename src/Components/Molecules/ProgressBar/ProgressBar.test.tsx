/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import ProgressBar, { ProgressBarProps } from "./ProgressBar";

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

    it("Should have progress-bar class", () => {
        const { getByTestId } = renderComponent();

        const testComponent = getByTestId("progress-bar");

        expect(testComponent).toHaveClass("progress-bar");
    });
});