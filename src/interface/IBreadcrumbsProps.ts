interface BreadcrumbsItems {
    title: string;
    link: string;
    id: string;
}

export interface IBreadcrumbsProps {
    breadcrumbsItems: BreadcrumbsItems[];
}