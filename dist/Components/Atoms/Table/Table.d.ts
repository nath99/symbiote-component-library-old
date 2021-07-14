import React from "react";
interface TableProps {
    tableContent: {
        tableHeader: string[];
        tableBody: {
            rowCols: string[];
        }[];
    };
    tableId?: string;
}
declare class Table extends React.Component<TableProps> {
    createMarkup(text: string): {
        __html: string;
    };
    generateHead(): JSX.Element;
    generateBody(): JSX.Element[];
    render(): JSX.Element;
}
export { Table };
