import React from "react";

{/* <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link> */}

import "../../../styles/atoms/Icon.scss";

export interface IconProps {
    icon: string,
    color?: string,
    size?: 'xxs'|'xs'|'sm'|'lg'|'xl',
}

export default class Icon extends React.Component<IconProps> {
    render() {
        const {
            icon,
            size,
            color
        } = this.props;

        return (
            <i data-testid="icon" className={`icon las la-${icon} ${size} ${color}`}></i>
        )
    }
}