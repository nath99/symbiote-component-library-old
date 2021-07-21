import React from "react";


interface NotificationProps {
    status: "information"|"success"|"warning"|"error",
    text?: string,
    callToActionLink? : string,
    callToActionText? : string
}

class Notification extends React.Component<NotificationProps> {
    getNotificationIcon() {
        if(this.props.status === 'success') {
            return 'la-check-circle';
        }

        if(this.props.status === 'warning') {
            return 'la-exclaimation-circle';
        }

        if(this.props.status === 'error') {
            return 'la-times-circle';
        }

        return 'la-info-circle';
    }

    render() {
        const {
            status,
            text,
            callToActionLink,
            callToActionText
        } = this.props;

        return (
            <div className={`container-fluid notification ${status}`}>
                <i className={`las ${this.getNotificationIcon()}`}></i>
                {text &&
                    <div className="text">
                        <p>{text}</p>
                    </div>
                }
                {callToActionLink && callToActionText &&
                    <button className="button outline-light cta sm">{callToActionText}</button>
                }
            </div>
        )
    }
}

export { Notification };