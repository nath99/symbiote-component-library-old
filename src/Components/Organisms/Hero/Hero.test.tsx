/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import Hero, { HeroProps } from "./Hero";

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

    it("Should have hero class", () => {
        const { getByTestId } = renderComponent();

        const testComponent = getByTestId("hero");

        expect(testComponent).toHaveClass("hero");
    });
});