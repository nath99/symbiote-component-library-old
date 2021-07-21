import React from "react";
interface TooltipProps {
    label: string;
    tooltip: string;
}
declare class Tooltip extends React.Component<TooltipProps> {
    render(): JSX.Element;
}
export { Tooltip };
