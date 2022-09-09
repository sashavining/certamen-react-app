import React from 'react';
import Logo from '../assets/logo.png'
import '../styles/header.css';

const Header = () => {

    return(
    <header>
        <img src={Logo} alt="certator logo - a timer" class="logo"/>
        <h1>Certator</h1>
        <ul>
            <li>Quizzer</li>
        </ul>
    </header>
    )
}

export default Header