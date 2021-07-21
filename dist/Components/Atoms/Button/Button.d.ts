import React from "react";
interface ButtonProps {
    type?: 'primary' | 'secondary' | 'tertiary';
    size?: 'lg' | 'md' | 'sm' | 'xs';
    style?: 'outline-light' | 'outline-dark' | 'cta';
    enabled?: boolean;
}
declare class Button extends React.Component<ButtonProps> {
    static defaultProps: {
        enabled: boolean;
    };
    render(): JSX.Element;
}
export { Button };
