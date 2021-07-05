import React from "react";

import { ButtonProps } from "./Button.types";

import "./Button.scss";

export default class Button extends React.Component<ButtonProps> {
  render() {
      return (
          <button
            data-testid="button"
            className={`button ${this.props.type}`}>{this.props.children}</button>
      )
  }
}
