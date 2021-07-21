import React from "react";
export interface IconProps {
    icon: string;
    color?: string;
    size?: 'xxs' | 'xs' | 'sm' | 'lg' | 'xl';
}
export default class Icon extends React.Component<IconProps> {
    render(): JSX.Element;
}
