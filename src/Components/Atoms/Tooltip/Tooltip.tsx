import React from "react";

interface TooltipProps {
    label: string,
    tooltip: string
}

class Tooltip extends React.Component<TooltipProps> {
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

export { Tooltip };