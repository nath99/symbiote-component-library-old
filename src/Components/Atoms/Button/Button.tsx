import React from "react";

import "../../../styles/atoms/Button.scss";
export interface ButtonProps {
  type?: 'primary'|'secondary'|'tertiary',
  size?: 'lg'|'md'|'sm'|'xs',
  style?: 'outline-light'|'outline-dark'|'cta',
  enabled?: boolean
}

export default class Button extends React.Component<ButtonProps> {
  static defaultProps = {
    enabled: true
  }

  render() {
    return (
        <button
          data-testid="button"
          className={`button ${this.props.type} ${this.props.size} ${this.props.style}` + (this.props.enabled ? '': ' disabled')}>{this.props.children}</button>
    )
  }
}
