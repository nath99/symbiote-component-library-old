import React from "react";

interface AccordionProps {
    accordionContent: {title: string, content: string}[]
}

class Accordion extends React.Component<AccordionProps> {
  render() {
      return (
          <div
            data-testid="accordion"
            className="accordion">
              {this.props.accordionContent.map((item, index) => (
                  <div key={index} className="tab">
                      <input type="checkbox" id={`accordion-${index}`}></input>
                      <label className="tab-label" htmlFor={`accordion-${index}`}>{item.title}</label>
                  <div className="tab-content">
                          <p>{item.content}</p>
                  </div>
              </div>
              ))}
          </div>
      )
  }
}

export { Accordion };
