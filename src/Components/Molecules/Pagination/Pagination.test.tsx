/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import { axe, toHaveNoViolations } from "jest-axe";
import Pagination, { PaginationProps } from "./Pagination";

    // Add Accessibility testing
expect.extend(toHaveNoViolations)

describe("Pagination Component", () => {
    let componentProps: PaginationProps;

    beforeEach(() => {
        componentProps = {
            pages: [{
                link: '#'
            },{
                link: '#'
            },{
                link: '#'
            },{
                link: '#'
            },{
                link: '#'
            }],
            currentPage: 3
        }
    });

    const renderComponent = () => render(<Pagination {...componentProps} />);

    it("Should have no accessibility violations", async () => {
        const { container } = renderComponent();

        const results = await axe(container)

        expect(results).toHaveNoViolations()
    });

    it("Should have pagination class", async () => {
        const { getByTestId } = renderComponent();

        const testComponent = await getByTestId("pagination");

        expect(testComponent).toHaveClass("pagination");
    });
});