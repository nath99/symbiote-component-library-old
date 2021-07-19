/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

import Hero, { HeroProps } from "./Hero";

    // Add Accessibility testing
expect.extend(toHaveNoViolations)

describe("Hero Component", () => {
    let heroProps: HeroProps;

    beforeEach(() => {
        heroProps = {
            image: {src: '', alt: ''},
            title: 'Hero Element',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    });

    const renderComponent = () => render(<Hero {...heroProps} />);

    it("Should have no accessibility violations", async () => {
        const { container } = renderComponent();

        const results = await axe(container)

        expect(results).toHaveNoViolations()
    });

    it("Should have hero class", async () => {
        const { getByTestId } = renderComponent();

        const testComponent = await getByTestId("hero");

        expect(testComponent).toHaveClass("hero");
    });
});