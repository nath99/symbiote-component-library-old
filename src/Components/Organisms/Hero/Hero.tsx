import React from "react";

import "../../../styles/organisms/Hero.scss";

export interface HeroProps {
    image: {
        src: string,
        alt: string
    },
    title: string,
    content: string
    callToAction?: {
        link: string,
        text: string
    }
    size?: 'full'|'contained',
    contentPosition?: 'left'|'right'|'center'
}

export default class Hero extends React.Component<HeroProps> {
    generateCta() {
        if(!this.props.callToAction)
            return '';

        return <button className="cta">{this.props.callToAction.text}</button>
    }

    renderFullWidth() {
        return (
            <div className="container hero-fluid left">
                <div className="col-xs-12 col-sm-8 col-lg-4">
                    <div className={`content ${this.props.contentPosition}`}>
                        <h3>{this.props.title}</h3>
                        {(this.props.content !== '') ? <p>{this.props.content}</p>:''}
                        {this.generateCta()}
                    </div>
                </div>
            </div>
        )
    }

    renderContained() {
        return (
            <div className={`col-xs-10 col-sm-8 col-lg-4 content ${this.props.contentPosition}`}>
                <h3>{this.props.title}</h3>
                {(this.props.content !== '') ? <p>{this.props.content}</p>:''}
                {this.generateCta()}
            </div>
        )
    }

    render() {
        return (
            <div
                data-testid="hero"
                className="hero">
                    <img className="hero-background" src={this.props.image.src} alt={this.props.image.alt} />
                    {(this.props.size === 'full') ? this.renderFullWidth() : this.renderContained() }
            </div>
        )
    }
}