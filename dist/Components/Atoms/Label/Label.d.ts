import React from "react";
interface LabelProps {
    labelText: string;
    labelStatus: 'success' | 'warning' | 'error' | 'new' | 'info';
}
declare class Label extends React.Component<LabelProps> {
    render(): JSX.Element;
}
export { Label };
