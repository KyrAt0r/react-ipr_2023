import React, { Component } from 'react';
import './MainMenu.css';
import {NavLink} from "react-router-dom";

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
                            <NavLink exact to={item.link} className="menu__link" activeClassName="active">{item.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default MainMenu;
