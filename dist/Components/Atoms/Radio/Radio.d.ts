import React from "react";
interface RadioItem {
    radioLabel: string;
    radioValue?: string;
    radioSelected?: boolean;
}
interface RadioProps {
    radioItems: RadioItem[];
    radioId?: string;
}
declare class Radio extends React.Component<RadioProps> {
    render(): JSX.Element;
}
export { RadioItem, Radio };
