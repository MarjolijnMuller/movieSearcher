import React from 'react';
import './Menu.css';

function Menu(props) {
    return (
        <nav>
            <ul className="navList">
                <li className="navItem"><a className="navLink">Home</a></li>
                <li className="navItem"><a className="navLink">Zoeken</a></li>
                <li className="navItem"><a className="navLink">Mijn favorieten</a></li>
                <li className="navItem"><a className="navLink">Account</a></li>
            </ul>
            <button type="button" className="logIn">Inloggen</button>
        </nav>
    )
}

export default Menu;