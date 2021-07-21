import React from "react";

interface ButtonProps {
  type?: 'primary'|'secondary'|'tertiary',
  size?: 'lg'|'md'|'sm'|'xs',
  style?: 'outline-light'|'outline-dark'|'cta',
  enabled?: boolean
}

class Button extends React.Component<ButtonProps> {
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


export { Button };