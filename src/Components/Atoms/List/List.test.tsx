/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

import List, { ListProps } from "./List";

    // Add Accessibility testing
expect.extend(toHaveNoViolations)

describe("List Component", () => {
    let listProps: ListProps;

    beforeEach(() => {
        listProps = {
            listContent: [{itemText: 'Item 1'}, {itemText: 'Item 2', children: [{itemText: 'Item 3'}]}]
        }
    });

    const renderComponent = () => render(<List {...listProps} />);

    it("Should have no accessibility violations", async () => {
        const { container } = renderComponent();

        const results = await axe(container)

        expect(results).toHaveNoViolations()
    });

    it("Should have styled-list class", async () => {
        const { getByTestId } = renderComponent();

        const testComponent = await getByTestId("list");

        expect(testComponent).toHaveClass("styled-list");
    });
});