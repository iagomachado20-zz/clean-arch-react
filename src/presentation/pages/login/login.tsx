import React from 'react';
import Styles from './login-style.scss';
import { 
    Header,
    Footer,
    Input
} from '@/presentation/components';

const Login: React.FC = () => {
    return (
        <div className={Styles.login}>
            <Header/>
            <form className={Styles.form}>
                <h2>Login</h2>
                <div className="form-group">

                    <Input type="email" name="email" placeholder="Digite seu e-mail" />
                    <Input type="password" name="password" placeholder="Insira sua senha"/>
                    <button type="button" className={Styles.btn}>Enviar</button>

                </div>
               
            </form>
            <Footer/>
        </div>
    )
};

export default Login;