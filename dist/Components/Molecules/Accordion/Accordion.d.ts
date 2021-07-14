import React from "react";
interface AccordionProps {
    accordionContent: {
        title: string;
        content: string;
    }[];
}
declare class Accordion extends React.Component<AccordionProps> {
    render(): JSX.Element;
}
export { Accordion };
