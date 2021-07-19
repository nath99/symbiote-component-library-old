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
            <ul className="pagination" role="menubar" aria-label="Pages" data-testid="pagination">
                {currentPage > 1 && pages.length > 1 &&
                    <li className="previous" role="menuitem">
                        <a href={pages[0].link}>
                            <i className="las la-arrow-circle-left"></i>
                            <span className="sr-only">Previous page</span>
                        </a>
                    </li>
                }
                {pages.map((page, index) => {
                    let pageNum = index + 1,
                        isCurrent = (pageNum == currentPage) ? true : false,
                        pageLabel = (isCurrent) ? `Current Page, Page ${pageNum}` : `Goto Page ${pageNum}`;

                    return (
                        <li key={index} className={(isCurrent) ? 'current' : ''} role="menuitem">
                            <a href={page.link} aria-label={pageLabel} aria-current={isCurrent}>{pageNum}</a>
                        </li>
                    )
                })}
                {currentPage < pages.length &&
                    <li className="next" role="menuitem">
                        <a href={pages[pages.length-1].link}>
                            <i className="las la-arrow-circle-right"></i>
                            <span className="sr-only">Next page</span>
                        </a>
                    </li>
                }
            </ul>
        )
    }
}
