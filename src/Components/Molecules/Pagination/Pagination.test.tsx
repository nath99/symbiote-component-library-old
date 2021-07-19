/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import Pagination, { PaginationProps } from "./Pagination";

describe("Pagination Component", () => {
    let paginationProps: PaginationProps;

    beforeEach(() => {
        paginationProps = {
            currentPage: 4,
            pages: [
                {link: '#'},
                {link: '#'},
                {link: '#'},
                {link: '#'},
                {link: '#'},
                {link: '#'},
                {link: '#'},
                {link: '#'},
                {link: '#'},
                {link: '#'}
            ]
        }
    });

    const renderComponent = () => render(<Pagination {...paginationProps} />);

    it("should render", () => {
        const { getByTestId } = renderComponent();

        const testComponent = getByTestId("pagination");

        expect(testComponent).toHaveClass("pagination");
    });
});