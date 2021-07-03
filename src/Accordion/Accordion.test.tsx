/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import Accordion from "./Accordion";
import { AccordionProps } from "./Accordion.types";

describe("Accordion Component", () => {
    let accordionProps: AccordionProps;

    beforeEach(() => {
        accordionProps = {
            accordionContent: [
                {
                    title: "First accordion tab",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur in facilisis diam.Aenean tincidunt erat at nulla sagittis ultrices.Suspendisse id molestie velit."
                },
                {
                    title: "Second accordion tab",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit."
                },
                {
                    title: "Third accordion tab",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit."
                }
            ]
        }
    });

    const renderComponent = () => render(<Accordion {...accordionProps} />);

    it("should render", () => {
        const { getByTestId } = renderComponent();

        const accordion = getByTestId("accordion");

        expect(accordion).toHaveClass("accordion");
    });
});