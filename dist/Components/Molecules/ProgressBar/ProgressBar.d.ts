import React from "react";
interface ProgressStep {
    label: string;
    complete: boolean;
}
interface ProgressBarProps {
    progressSteps: ProgressStep[];
    progressId?: string;
}
export default class ProgressBar extends React.Component<ProgressBarProps> {
    render(): JSX.Element;
}
export { ProgressStep, ProgressBar };
