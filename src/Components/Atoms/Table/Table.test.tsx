/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

import Table, { TableProps } from "./Table";

    // Add Accessibility testing
expect.extend(toHaveNoViolations)

describe("Table Component", () => {
    let tableProps: TableProps;

    beforeEach(() => {
        tableProps = {
            tableContent: {
                tableHeader: ["Heading 1", "Heading 2"],
                tableBody: [{
                    rowCols: ['Item 1.1', 'Item 1.2']
                }, {
                    rowCols: ['Item 2.1', 'Item 2.2']
                }]
            }
        }
    });

    const renderComponent = () => render(<Table {...tableProps} />);

    it("Should have no accessibility violations", async () => {
        const { container } = renderComponent();

        const results = await axe(container)

        expect(results).toHaveNoViolations()
    });

    it("Should have table class", async () => {
        const { getByTestId } = renderComponent();

        const testComponent = await getByTestId("table");

        expect(testComponent).toHaveClass("table");
    });
});