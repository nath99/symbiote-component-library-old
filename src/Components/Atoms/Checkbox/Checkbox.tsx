import React from "react";

interface CheckboxProps {
    checkboxLabel: string,
    checkboxId?: string
}

class Checkbox extends React.Component<CheckboxProps> {
    render() {
        let generateId = ():string => {
            const id = Math.random().toString(36).substring(7);

            return "checkbox-" + id
        }
        let checkboxId = this.props.checkboxId;

        if(!checkboxId)
            checkboxId = generateId();

        return (
            <div
                data-testid="checkbox"
                className="checkbox">
                <label className="checkbox-label" htmlFor={checkboxId}>
                    <div className="checkbox-group">
                        <input type="checkbox" className="checkbox-input" id={checkboxId} hidden />
                        <span className="checkbox-checked"></span>
                    </div>
                    <p className="title">{this.props.checkboxLabel}</p>
                </label>
            </div>
        )
    }
}

export { Checkbox };