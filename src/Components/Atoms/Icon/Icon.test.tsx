/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import Icon, { IconProps } from "./Icon";

describe("Icon Component", () => {
    let iconProps: IconProps;

    beforeEach(() => {
        iconProps = {
            icon: 'biking'
        }
    });

    const renderComponent = () => render(<Icon {...iconProps} />);

    it("Should have icon class", () => {
        const { getByTestId } = renderComponent();

        const testComponent = getByTestId("icon");

        expect(testComponent).toHaveClass("icon");
    });

    it("Should have biking class", () => {
        const { getByTestId } = renderComponent();

        const testComponent = getByTestId("icon");

        expect(testComponent).toHaveClass("la-biking");
    });

    it("Should have inverted class", () => {
        iconProps.color = 'inverted';
        const { getByTestId } = renderComponent();

        const testComponent = getByTestId("icon");

        expect(testComponent).toHaveClass("inverted");
    });
});