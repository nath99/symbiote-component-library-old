import React from "react";

import "../../../styles/atoms/Tooltip.scss";

export interface TooltipProps {
    label: string,
    tooltip: string
}

export default class Tooltip extends React.Component<TooltipProps> {
    render() {
        return (
            <div
                data-testid="tooltip"
                className="tooltip">
                <p>{this.props.label}</p>
                <span className="tooltip-text">{this.props.tooltip}</span>
            </div>
        )
    }
}
