import React, {Component} from 'react';
import './Header.css';
import UserInfo from "../UserInfo/UserInfo";

interface HeaderProps {
    logoSrc: string;
    siteName: string;
}

class Header extends Component<HeaderProps> {
    render() {
        const {logoSrc, siteName} = this.props;

        return (
            <header className="header">
                <a href="/" className="header__logo-link">
                    <img src={logoSrc} alt="Logo" className="header__logo"/>
                </a>
                <h1 className="header__site-name">{siteName}</h1>
                <UserInfo isLoggedIn={true} />
            </header>
        );
    }
}

export default Header;