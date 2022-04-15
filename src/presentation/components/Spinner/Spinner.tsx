import React, { memo } from 'react';
import Styles from './Spinner-style.scss';

const Spinner: React.FC = () => {
    return (
        <div className={Styles.spinner}></div>
    )
}

export default memo(Spinner);