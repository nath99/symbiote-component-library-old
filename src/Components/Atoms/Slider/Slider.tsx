import React from "react";

// Import scss here
import "../../../styles/atoms/Slider.scss";

export interface SliderProps {
    value?: number,
    min?: number,
    max?: number,
}

interface SliderState {
    value: number
}

export default class Slider extends React.Component<SliderProps, SliderState> {
    static defaultProps = {
        min: 0,
        max: 10,
        value: 0
    }

    constructor(props) {
        super(props);

        this.state = {value: props.value};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    render() {
        const {
            min,
            max
        } = this.props;

        const {
            value
        } = this.state;

        return (
            <div className="slider">
                <input type="range" min={min} max={max} value={value} onChange={this.handleChange} />
                <span className="value">{value}</span>
            </div>
        )
    }
}