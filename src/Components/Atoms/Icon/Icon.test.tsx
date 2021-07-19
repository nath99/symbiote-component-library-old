/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

import Icon, { IconProps } from "./Icon";

    // Add Accessibility testing
expect.extend(toHaveNoViolations)

describe("Icon Component", () => {
    let iconProps: IconProps;

    beforeEach(() => {
        iconProps = {
            icon: 'biking'
        }
    });

    const renderComponent = () => render(<Icon {...iconProps} />);

    it("Should have no accessibility violations", async () => {
        const { container } = renderComponent();

        const results = await axe(container)

        expect(results).toHaveNoViolations()
    });

    it("Should have icon class", async () => {
        const { getByTestId } = renderComponent();

        const testComponent = await getByTestId("icon");

        expect(testComponent).toHaveClass("icon");
    });

    it("Should have biking class", async () => {
        const { getByTestId } = renderComponent();

        const testComponent = await getByTestId("icon");

        expect(testComponent).toHaveClass("la-biking");
    });

    it("Should have inverted class", async () => {
        iconProps.color = 'inverted';
        const { getByTestId } = renderComponent();

        const testComponent = await getByTestId("icon");

        expect(testComponent).toHaveClass("inverted");
    });
});