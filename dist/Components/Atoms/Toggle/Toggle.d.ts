import React from "react";
interface ToggleProps {
    toggleLabel: string;
    toggleId?: string;
}
declare class Toggle extends React.Component<ToggleProps> {
    render(): JSX.Element;
}
export { Toggle };
