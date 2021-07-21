import React from "react";
interface Breadcrumb {
    breadcrumbLabel: string,
    breadcrumbLink: string
}

interface Props {
    breadcrumbs: Breadcrumb[]
}

export default class Breadcrumbs extends React.Component<Props> {
    render() {
        return (
            <div className="container-fluid breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <span>
                                {this.props.breadcrumbs.map((bc: Breadcrumb, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <a href={bc.breadcrumbLink} className="breadcrumb">
                                                <i className="las la-home xxs"></i>{bc.breadcrumbLabel}
                                            </a>
                                            {index <= this.props.breadcrumbs.length -1 &&
                                                <span className="breadcrumb__spacer"><i className="las la-angle-right xxs"></i></span>
                                            }
                                        </React.Fragment>

                                    )
                                })}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export {Breadcrumb, Breadcrumbs};