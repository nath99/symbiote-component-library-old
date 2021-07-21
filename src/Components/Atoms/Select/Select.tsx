import React from "react";

interface SelectItem {
    label: string,
    value?: string,
    selected?: boolean
}

interface SelectProps {
    selectLabel: string,
    selectItems: SelectItem[],
    selectId?: string
}

class Select extends React.Component<SelectProps> {
    render() {
        let generateId = ():string => {
            const id = Math.random().toString(36).substring(7);

            return "radio-" + id
        }

        let selectId = this.props.selectId;

        if(!selectId)
            selectId = generateId();

        return (
            <div
                data-testid="select"
                className="select">
                <label htmlFor={selectId}>{this.props.selectLabel}</label>
                <select id={selectId} name={selectId}>
                {this.props.selectItems.map((item, index) => {
                    let value = item.value;
                    if(!value)
                        value = item.label;

                    return (
                        <option key={index} value={value}>{item.label}</option>
                    )
                })}
                </select>
            </div>
        )
    }
}

export { SelectItem, Select };