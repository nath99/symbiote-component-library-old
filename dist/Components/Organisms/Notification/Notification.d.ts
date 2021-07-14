import React from "react";
interface NotificationProps {
    status: "information" | "success" | "warning" | "error";
    text?: string;
    callToActionLink?: string;
    callToActionText?: string;
}
declare class Notification extends React.Component<NotificationProps> {
    getNotificationIcon(): "la-check-circle" | "la-exclaimation-circle" | "la-times-circle" | "la-info-circle";
    render(): JSX.Element;
}
export { Notification };
