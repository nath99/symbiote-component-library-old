import React from "react";
interface ListItem {
    itemText: string;
    children?: ListItem[];
}
interface ListProps {
    listContent: ListItem[];
    ordered?: boolean;
    parent?: boolean;
}
declare class List extends React.Component<ListProps> {
    static defaultProps: {
        ordered: boolean;
        parent: boolean;
    };
    render(): JSX.Element;
}
export { ListItem, List };
