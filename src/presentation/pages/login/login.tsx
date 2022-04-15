import React, { useState } from 'react';
import Styles from './login-style.scss';
import { 
    Header,
    Footer,
    Input,
    Spinner
} from '../../components';
import Context from '../../contexts/form-context';

type StateProps = {
    isLoading: boolean;
};

const Login: React.FC = () => {

    const [ state  ] = useState<StateProps>({
        isLoading: false
    });

    return (
        <div className={Styles.login}>
            <Header/>
            <Context.Provider value={state}>
                <form className={Styles.form}>
                    <h2>Login</h2>
                    <div className="form-group">

                        <Input type="email" name="email" placeholder="Digite seu e-mail" />
                        <Input type="password" name="password" placeholder="Insira sua senha"/>
                        <button type="button" className={Styles.btn}>Enviar</button>

                    </div>
                    <div  data-testid="form-loading">
                        { state.isLoading && <Spinner/> }
                    </div>
                </form>
            </Context.Provider>
            <Footer/>
        </div>
    )
};

export default Login;