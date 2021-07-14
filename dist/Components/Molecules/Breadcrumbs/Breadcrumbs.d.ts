import React from "react";
interface Breadcrumb {
    breadcrumbLabel: string;
    breadcrumbLink: string;
}
interface Props {
    breadcrumbs: Breadcrumb[];
}
export default class Breadcrumbs extends React.Component<Props> {
    render(): JSX.Element;
}
export { Breadcrumb, Breadcrumbs };
