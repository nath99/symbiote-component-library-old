import React from "react";
interface SelectItem {
    label: string;
    value?: string;
    selected?: boolean;
}
interface SelectProps {
    selectLabel: string;
    selectItems: SelectItem[];
    selectId?: string;
}
declare class Select extends React.Component<SelectProps> {
    render(): JSX.Element;
}
export { SelectItem, Select };
