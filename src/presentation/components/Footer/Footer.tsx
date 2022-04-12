import React, { memo } from 'react';
import Styles from './Footer-style.scss';

const Header: React.FC = () => {
    return (
        <footer className={Styles.footer}></footer>
    )
}

export default memo(Header);