import React from "react";

import "../../../styles/atoms/Label.scss";

export interface LabelProps {
    labelText: string,
    labelStatus: 'success'|'warning'|'error'|'new'|'info'
}

export default class Label extends React.Component<LabelProps> {
    render() {
        return (
            <span data-testid="label" className={`label label-${this.props.labelStatus}`}>{this.props.labelText}</span>
        )
    }
}