/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import Table, { TableProps } from "./Table";

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

    it("Should have table class", () => {
        const { getByTestId } = renderComponent();

        const testComponent = getByTestId("table");

        expect(testComponent).toHaveClass("table");
    });
});