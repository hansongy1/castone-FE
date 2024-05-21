import React from 'react';
import '../styles/Header.css';

import Logo from "../assets/city-logo.png";
import MenuBar from '../assets/fi-sr-menu-burger.png';

const Header = () => {
    return (
        <header className='App-header'>
            <section className='App-menu'>
                <img src={MenuBar} alt='Menu Bar'/>
            </section>
            <section className='App-logo'>
                <img src={Logo} alt='Logo' />
            </section>
        </header>
    );
}

export default Header;