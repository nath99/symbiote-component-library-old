/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

import Card, { CardProps } from './Card';

    // Add Accessibility testing
expect.extend(toHaveNoViolations)

describe('Card Component', () => {
    let cardProps:CardProps;

    beforeEach(() => {
        cardProps = {
            image:"https://source.unsplash.com/collection/1922729",
            fullImage: false,
            wide: false,
            topic: "Topic",
            heading: "Mauris tortor turpis, dignissim vel ullam.",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit."
        };
    });

    const renderComponent = () => render(<Card {...cardProps} />);

    it("Should have no accessibility violations", async () => {
        const { container } = renderComponent();

        const results = await axe(container)

        expect(results).toHaveNoViolations()
    });

    it("Should render", async () => {
        const { getByTestId } = renderComponent();

        const testComponent = await getByTestId("card");

        expect(testComponent).toHaveClass("card");
    });
})