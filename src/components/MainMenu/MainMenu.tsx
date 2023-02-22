import React, { Component } from 'react';
import './MainMenu.css';

interface MenuItem {
    title: string;
    link: string;
    id: string;
}

interface MenuProps {
    menuItems: MenuItem[];
}

class MainMenu extends Component<MenuProps> {
    render() {
        const { menuItems } = this.props;

        return (
            <nav className="menu">
                <ul className="menu__list">
                    {menuItems.map(item => (
                        <li key={item.id} className="menu__item">
                            <a href={item.link} className="menu__link">
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default MainMenu;
