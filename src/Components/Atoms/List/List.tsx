import React from "react";

import "../../../styles/atoms/List.scss";

interface ListItem {
    itemText: string,
    children?: ListItem[]
}

export interface ListProps {
    listContent: ListItem[],
    ordered?: boolean,
    parent?: boolean
}

export default class List extends React.Component<ListProps> {
    static defaultProps = {
        ordered: false,
        parent: true
    }

    render() {
        const testId = (this.props.parent) ? 'list' : 'list-child';
        const items = this.props.listContent.map((item, index) => {
            if(item.children) {
                return (
                    <li key={index}>
                        {item.itemText}
                        <List ordered={this.props.ordered} parent={false} listContent={...item.children}></List>
                    </li>
                )
            } else {
                return (<li key={index}>{item.itemText}</li>)
            }
        });

        if (this.props.ordered) {
            return (
                <ol className="styled-list" data-testid={testId}>{items}</ol>
            )
        } else {
            return (
                <ul className="styled-list" data-testid={testId}>{items}</ul>
            )
        }
    }
}