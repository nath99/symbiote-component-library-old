import React from "react";
interface Props {
    image?: string
    fullImage: boolean
    wide?: boolean
    date?: Date
    topic?: string
    heading?: string
    body?: string
    callToActionText?: string
    callToActionLink?: string
}
class Card extends React.Component<Props> {
    getMonthString(d: Date): string {
        const days = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        return days[d.getMonth()];
    }

    render() {
        const { image,
            fullImage,
            wide,
            date,
            topic,
            heading,
            body,
            callToActionText,
            callToActionLink
        } = this.props

        return (
            <div className={`col-xs-12 ${wide ? "col-sm-8" : "col-sm-4"}`}>
                <div className={`card ${(image && fullImage) ? "full-image-card " : image ? "" : "no-image "}`} data-testid="card">

                    <div className={`${wide ? "card wide-card" : "card-wrapper"}`} style={wide ? {} : {
                        backgroundImage: `url(${image})`
                    }}>
                        {/* Optional date */}
                        {date &&
                            <div className="date">
                                <span className="day">{date.getDay()}</span>
                                <span className="month">{this.getMonthString(date)}</span>
                                <span className="year">{date.getFullYear()}</span>
                            </div>
                        }
                        <div className="content">
                            {topic && <p className={`${fullImage ? "inverted" : ""}`}>{topic}</p>}
                            {heading && <h3 className={`${fullImage ? "inverted" : ""}`}>{heading}</h3>}
                            {body && <p className={`${fullImage ? "inverted" : ""}`}>{body}</p>}
                            {callToActionText && callToActionLink &&
                                <div className="button-container">
                                    <button className={`cta {${fullImage ? " inverted" : ""}`}>{callToActionText}</button>
                                </div>
                            }
                        </div>

                        {wide && image &&
                            <div className="card-image" style={{
                                backgroundImage: `url(${image})`
                            }}></div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export { Card };
