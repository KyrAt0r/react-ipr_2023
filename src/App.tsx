import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './components/Routes';
import Header from "./components/Header/Header";
import MainMenu from "./components/MainMenu/MainMenu";
import Footer from "./components/Footer/Footer";
import logo from './assets/logoMimic.gif';
import Home from "./Pages/Home/Home";

function App() {
    let menuItems = [ // Обёрнуто в JSON обьект для передачи в пропсыы
        { title: 'Новости', link: '/news', id: '0' },
        { title: 'О нас', link: '/about', id: '1' },
        { title: 'Контакты', link: '/contacts', id: '2' },
    ];

    return (
        <Router>
            <div className="App">
                <Header logoSrc={logo} siteName="ИПР React + TypeScript" />
                <MainMenu menuItems={menuItems} />
                <Home/>
                <Routes/>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
