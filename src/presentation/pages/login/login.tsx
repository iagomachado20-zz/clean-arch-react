import React from 'react';
import Styles from './login-style.scss';
import Header from '@/presentation/components/Header/Header';
import Footer from '@/presentation/components/Footer/Footer';

const Login: React.FC = () => {
    return (
        <div className={Styles.login}>
            <Header/>
            <form className={Styles.form}>
                <h2>Login</h2>
                <div className="form-group">

                    <input className={Styles.inputForm} type="email" name="email" id="email" placeholder="Digite seu e-mail"/>
                    <input className={Styles.inputForm} type="password" name="password" id="password" placeholder="Digite sua senha"/>

                    <button className={Styles.btn}>Enviar</button>

                </div>
               
            </form>
            <Footer/>
        </div>
    )
};

export default Login;