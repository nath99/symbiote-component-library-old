import React from "react";
export interface SliderProps {
    value?: string;
    min?: number;
    max?: number;
    sliderId?: string;
}
interface SliderState {
    value: string;
}
export default class Slider extends React.Component<SliderProps, SliderState> {
    static defaultProps: {
        min: number;
        max: number;
        value: number;
    };
    constructor(props: SliderProps);
    handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
    render(): JSX.Element;
}
export {};
