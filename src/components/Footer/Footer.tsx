import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    getCurrentYear() {
        return new Date().getFullYear();
    }

    render() {
        return (
            <footer className="footer">
                <div className="footer__copyright">
                    &copy; Все права защищены {this.getCurrentYear()} год.
                </div>
            </footer>
        );
    }
}

export default Footer;
