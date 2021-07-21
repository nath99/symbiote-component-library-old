import React from "react";
interface HeroProps {
    image: {
        src: string;
        alt: string;
    };
    title: string;
    content: string;
    callToAction?: {
        link: string;
        text: string;
    };
    size?: 'full' | 'contained';
    contentPosition?: 'left' | 'right' | 'center';
}
declare class Hero extends React.Component<HeroProps> {
    generateCta(): JSX.Element | "";
    renderFullWidth(): JSX.Element;
    renderContained(): JSX.Element;
    render(): JSX.Element;
}
export { Hero };
