import React from 'react';
import Styles from './Input-style.scss';
import ResetStyles from '@/presentation/scss/_reset.scss';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
    return (
        <div className={`${ResetStyles['mb-2']} inputWrap`}>
            <input {...props}  className={Styles.inputForm}/>
            <span></span>
        </div>
    )
}

export default Input;