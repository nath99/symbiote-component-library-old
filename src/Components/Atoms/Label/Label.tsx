import React from "react";

interface LabelProps {
    labelText: string,
    labelStatus: 'success'|'warning'|'error'|'new'|'info'
}

class Label extends React.Component<LabelProps> {
    render() {
        return (
            <span data-testid="label" className={`label label-${this.props.labelStatus}`}>{this.props.labelText}</span>
        )
    }
}

export { Label };