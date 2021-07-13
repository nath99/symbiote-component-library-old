import React from "react";

import "../../../styles/molecules/Pagination.scss";

interface PageProp {
    link: string
}

export interface PaginationProps {
    pages: PageProp[],
    currentPage: number
}

export default class Pagination extends React.Component<PaginationProps> {
    render() {
        const {
            pages,
            currentPage
        } = this.props;

        return (
            <ul className="pagination" role="menubar" aria-label="Pages">
                {currentPage > 1 &&
                    <li className="previous">
                        <button>
                            <i className="las la-arrow-circle-left"></i>
                            <span className="sr-only">Previous page</span>
                        </button>
                    </li>
                }
                {pages.map((page, index) => (
                    <li key={index} className={(index + 1 == currentPage) ? 'current' : ''}>
                        <button data-link={page.link}>{index + 1}</button>
                    </li>
                ))}
                {currentPage < pages.length &&
                    <li className="next">
                        <button>
                            <i className="las la-arrow-circle-right"></i>
                            <span className="sr-only">Next page</span>
                        </button>
                    </li>
                }
            </ul>
        )
    }
}
