import React from "react";

interface ProgressStep {
    label: string,
    complete: boolean
}

interface ProgressBarProps {
    progressSteps: ProgressStep[],
    progressId?: string
}

export default class ProgressBar extends React.Component<ProgressBarProps> {
    render() {
        let generateId = ():string => {
            const id = Math.random().toString(36).substring(7);

            return "progress-" + id
        }

        let progressId = this.props.progressId;

        if(!progressId)
            progressId = generateId();

        return (
            <div
                data-testid="progress-bar"
                className="progress-bar">
                <ol className="progress-steps">
                {this.props.progressSteps.map((item, index) => {
                    let itemClass = 'count';

                    if(item.complete)
                        itemClass += ' completed'

                    return (
                        <li key={index} className="progress-step">
                            <span className={itemClass}></span>
                            <span className="description">{item.label}</span>
                        </li>
                    )
                })}
                </ol>
            </div>
        )
    }
}

export {ProgressStep, ProgressBar};