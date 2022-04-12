import React from 'react';
import Styles from './Header-style.scss';

const Header: React.FC = () => {
    return (
        <header className={Styles.header}>
            <img width={120} src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png" alt="" />
            <h1>4 Dev - Enquete para Programadores</h1>
        </header>
    )
}

export default Header;