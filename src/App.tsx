import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from "./components/Header/Header";
import MainMenu from "./components/MainMenu/MainMenu";
import Footer from "./components/Footer/Footer";
import logo from './assets/logoMimic.gif';
import './styles.css';
import Routes from "./components/Routes";

function App() {
    let menuItems = [ // Обёрнуто в JSON обьект для передачи в пропсыы
        {title: 'Главная', link: '/', id: '0'},
        {title: 'Новости', link: '/news', id: '1'},
        {title: 'О нас', link: '/about', id: '2'},
        {title: 'Контакты', link: '/functional', id: '3'},
    ];

    return (
        <Router>
            <div className="App">
                <Header logoSrc={logo} siteName="ИПР React + TypeScript"/>
                <MainMenu menuItems={menuItems}/>
                <Routes/>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
