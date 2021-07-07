/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import List, { ListProps } from "./List";

describe("List Component", () => {
    let listProps: ListProps;

    beforeEach(() => {
        listProps = {
            listContent: [{itemText: 'Item 1'}, {itemText: 'Item 2', children: [{itemText: 'Item 3'}]}]
        }
    });

    const renderComponent = () => render(<List {...listProps} />);

    it("Should have styled-list class", () => {
        const { getByTestId } = renderComponent();

        const testComponent = getByTestId("list");

        expect(testComponent).toHaveClass("styled-list");
    });
});