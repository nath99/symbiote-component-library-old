import React from "react";

import "../../../styles/atoms/Radio.scss";

interface RadioItem {
    radioLabel: string,
    radioValue?: string,
    radioSelected?: boolean
}

export interface RadioProps {
    radioItems: RadioItem[]
    radioId?: string
}

export default class Radio extends React.Component<RadioProps> {
    render() {
        let generateId = ():string => {
            const id = Math.random().toString(36).substring(7);

            return "radio-" + id
        }

        let radioName = this.props.radioId;

        if(!radioName)
            radioName = generateId();

        return (
            <div
                data-testid="radio"
                className="radio">
                {this.props.radioItems.map((item, index) => {
                    let value = item.radioValue;
                    if(!value)
                        value = item.radioLabel;

                    let radioId = generateId();
                    return (
                        <label className="radio-label" htmlFor={radioId} key={index}>
                            <div className="radio-group">
                                <input type="radio" className="radio-input" name={radioName} id={radioId} value={value} defaultChecked={item.radioSelected} hidden />
                                <span className="radio-checked"></span>
                            </div>
                            <p className="title">{item.radioLabel}</p>
                        </label>
                    )
                })}
            </div>
        )
    }
}
