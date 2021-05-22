import ContainerStyles from './SignUpContainer.module.css';
import Register from '../signUpFields/Register'
import { Link } from 'react-router-dom';

const SignUpContainer = (props) =>{
    return(
        <>
        <div className={ContainerStyles.container}>
            <div className={ContainerStyles.signUpCard}>
                <h1 className={ContainerStyles.header}>Sign Up</h1>
                <h5 className={ContainerStyles.registro}>Already have an account? <Link to="/">Login</Link></h5>
                <Register users={props.users} submit = {props.submit} errorMessage= {props.errorMessage}/>
            </div>
        </div>
        </>
    );
};

export default SignUpContainer;