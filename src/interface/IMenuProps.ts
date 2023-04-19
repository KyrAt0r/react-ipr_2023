interface IMenuItem {
    title: string;
    link: string;
    id: string;
}

export interface IMenuProps {
    menuItems: IMenuItem[];
}