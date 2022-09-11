import React from 'react';
import Logo from '../assets/logo.png'
import '../styles/header.css';

const Header = () => {

    return(
    <header class="site-header">
        <a href="/">
            <img src={Logo} alt="certator logo - a timer" class="logo"/>
            <h1>Certator</h1>
        </a>
        <nav>
            <ul>
                <li>Quizzer</li>
            </ul>
        </nav>
    </header>
    )
}

export default Header