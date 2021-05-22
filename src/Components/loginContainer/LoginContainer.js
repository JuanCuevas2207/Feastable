import ContainerStyles from './LoginContainer.module.css';
import Fields from '../loginFields/Fields'
import { Link } from 'react-router-dom';

const LoginContainer = (props) =>{
    return(
        <>
        <div className={ContainerStyles.container}>
            <div className={ContainerStyles.loginCard}>
                <h1 className={ContainerStyles.header}>Login</h1>
                <h5 className={ContainerStyles.registro}>Doesn't have an account yet? <Link to="/signUp">Sign Up</Link></h5>
                <Fields checkInfo={props.checkInfo} errorMessage = {props.errorMessage}/>
            </div>
        </div>
        </>
    );
};

export default LoginContainer;