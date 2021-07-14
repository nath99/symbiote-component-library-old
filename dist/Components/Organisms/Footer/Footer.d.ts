import React from "react";
interface FooterLink {
    footerlabel: string;
    footerLink: string;
}
interface FooterList {
    heading: string;
    footerLinks: FooterLink[];
}
interface SocialLinks {
    heading?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedIn?: string;
}
interface Copyright {
    name: string;
    link: string;
}
interface Props {
    footerLists: [FooterList, FooterList, FooterList];
    socialLinks?: SocialLinks;
    copyright?: Copyright;
}
declare class Footer extends React.Component<Props> {
    render(): JSX.Element;
}
export { FooterLink, FooterList, SocialLinks, Copyright, Footer };
