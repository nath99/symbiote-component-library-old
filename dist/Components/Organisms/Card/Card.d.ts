import React from "react";
interface Props {
    image?: string;
    fullImage: boolean;
    wide?: boolean;
    date?: Date;
    topic?: string;
    heading?: string;
    body?: string;
    callToActionText?: string;
    callToActionLink?: string;
}
declare class Card extends React.Component<Props> {
    getMonthString(d: Date): string;
    render(): JSX.Element;
}
export { Card };
