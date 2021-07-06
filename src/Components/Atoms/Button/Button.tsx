import React from "react";

export interface ButtonProps {
  type?: 'primary'|'secondary'|'tertiary',
  size?: 'lg'|'md'|'sm'|'xs',
  style?: 'outline-light'|'outline-dark'|'cta',
  enabled?: boolean
}

import "../../../styles/atoms/Button";

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
