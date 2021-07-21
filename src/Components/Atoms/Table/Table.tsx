import React from "react";

interface TableProps {
    tableContent: {
        tableHeader: string[],
        tableBody: { rowCols: string[] }[]
    }
    tableId?: string
}

class Table extends React.Component<TableProps> {
    createMarkup(text: string) {
        return {__html: text}
    }

    generateHead() {
        return (<tr>{this.props.tableContent.tableHeader.map((tableHeading, headIndex) =>{
            return (<th key={headIndex}>{tableHeading}</th>)
        })}</tr>)
    }

    generateBody() {
        return this.props.tableContent.tableBody.map((row, rowIndex) => {
            return (<tr key={rowIndex}>{row.rowCols.map((label, colIndex) => {
                return (<td key={colIndex} dangerouslySetInnerHTML={this.createMarkup(label)}></td>)
            })}</tr>)
        })
    }

    render() {
        let generateId = ():string => {
            const id = Math.random().toString(36).substring(7);

            return "table-" + id
        }

        let tableId = this.props.tableId;

        if(!tableId)
            tableId = generateId();

        return (
            <table
                data-testid="table"
                className="table"
                id={tableId}>
                    <thead>{this.generateHead()}</thead>
                    <tbody>{this.generateBody()}</tbody>
            </table>
        )
    }
}

export { Table };
