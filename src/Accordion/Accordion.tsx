import React from "react";

import { AccordionProps } from "./Accordion.types";

import "./Accordion.scss";

const Accordion: React.FC<AccordionProps> = ({ accordionContent }) => (
  <div
    data-testid="accordion"
    className={`accordion`}
  >
    { accordionContent.map((item, index) => (
        <div key={index} className="tab">
            <input type="checkbox" id={`accordion-${index}`}></input>
            <label className="tab-label" htmlFor={`accordion-${index}`}>{item.title}</label>
            <div className="tab-content">
                <p>{item.content}</p>
            </div>
        </div>
    )) }
  </div>
);

export default Accordion;