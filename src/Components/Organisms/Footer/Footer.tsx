import React from "react"

interface FooterLink {
    footerlabel: string,
    footerLink: string
}

interface FooterList {
    heading: string,
    footerLinks: FooterLink[]
}

interface SocialLinks {
    heading?: string,
    facebook?: string,
    twitter?: string,
    instagram?: string,
    linkedIn?: string
}

interface Copyright {
    name: string,
    link: string
}

interface Props {
    footerLists: [FooterList, FooterList, FooterList],
    socialLinks?: SocialLinks,
    copyright?: Copyright
}

class Footer extends React.Component<Props> {
    render() {
        const {
            footerLists,
            socialLinks,
            copyright
        } = this.props

        return (
            <div className="container-fluid footer-container">
                <footer>
                    <div className="container">
                        <div className="row">
                            {footerLists.map((fl: FooterList, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <div className="col-xs-6 col-md-3">
                                            <p>{fl.heading}</p>
                                            <ul>
                                                {fl.footerLinks.map((link: FooterLink, index) => {
                                                    return (
                                                        <React.Fragment key={index}>
                                                            <li><a href={link.footerLink}>{link.footerlabel}</a></li>
                                                        </React.Fragment>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                            {socialLinks &&
                                <div className="col-xs-6 col-md-3">
                                    <p>{socialLinks.heading ? socialLinks.heading : "Social"}</p>

                                    {socialLinks.facebook &&
                                        <div className="social-link">
                                            <a href={socialLinks.facebook} target="_blank"><i className="lab la-facebook inverted"></i><p>Facebook</p></a>
                                        </div>
                                    }

                                    {socialLinks.twitter &&
                                        <div className="social-link">
                                            <a href={socialLinks.twitter} target="_blank"><i className="lab la-twitter inverted"></i><p>Twitter</p></a>
                                        </div>
                                    }

                                    {socialLinks.instagram &&
                                        <div className="social-link">
                                            <a href={socialLinks.instagram} target="_blank"><i className="lab la-instagram inverted"></i><p>Instagram</p></a>
                                        </div>
                                    }

                                    {socialLinks.linkedIn &&
                                        <div className="social-link">
                                            <a href={socialLinks.linkedIn} target="_blank"><i className="lab la-linkedin-in inverted"></i><p>LinkedIn</p></a>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </footer>
                {copyright &&
                    <div className="copyright">
                        <p>Copyright &#169; <a href={copyright.link} target="_blank">{copyright.name}</a> {new Date().getFullYear().toString()}</p>
                    </div>
                }
            </div>
        )
    }
}

export { FooterLink, FooterList, SocialLinks, Copyright, Footer };