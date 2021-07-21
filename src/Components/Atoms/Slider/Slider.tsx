import React from "react";

export interface SliderProps {
    value?: string,
    min?: number,
    max?: number,
    sliderId?: string
}

interface SliderState {
    value: string
}

export default class Slider extends React.Component<SliderProps, SliderState> {
    static defaultProps = {
        min: 0,
        max: 10,
        value: 0
    }

    constructor(props: SliderProps) {
        super(props);

        if (props.value) {
            this.state = {
                value: props.value
            };
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
            this.setState(
                {value: e.target.value}
            )
    }

    render() {
        let generateId = ():string => {
            const id = Math.random().toString(36).substring(7);

            return "checkbox-" + id
        }

        const {
            min,
            max
        } = this.props;

        const {
            value
        } = this.state;

        let sliderId = this.props.sliderId;

        if(!sliderId)
            sliderId = generateId();

        return (
            <label className="slider" data-testid="slider" htmlFor={sliderId}>
                <input type="range" id={sliderId} min={min} max={max} value={value} onChange={this.handleChange} />
                <span className="value">{value}</span>
            </label>
        )
    }
}