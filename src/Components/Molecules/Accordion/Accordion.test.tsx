/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

import Accordion, { AccordionProps } from "./Accordion";

    // Add Accessibility testing
expect.extend(toHaveNoViolations)

describe("Accordion Component", () => {
    let accordionProps: AccordionProps;

    beforeEach(() => {
        accordionProps = {
            accordionContent: [
                {
                    title: "First accordion tab",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur in facilisis diam.Aenean tincidunt erat at nulla sagittis ultrices.Suspendisse id molestie velit."
                }
            ]
        }
    });

    const renderComponent = () => render(<Accordion {...accordionProps} />);

    it("Should have no accessibility violations", async () => {
        const { container } = renderComponent();

        const results = await axe(container)

        expect(results).toHaveNoViolations()
    });

    it("should render", async () => {
        const { getByTestId } = renderComponent();

        const accordion = await getByTestId("accordion");

        expect(accordion).toHaveClass("accordion");
    });
});