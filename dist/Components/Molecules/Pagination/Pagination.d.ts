import React from "react";
interface PageProp {
    link: string;
}
interface PaginationProps {
    pages: PageProp[];
    currentPage: number;
}
declare class Pagination extends React.Component<PaginationProps> {
    render(): JSX.Element;
}
export { Pagination };
