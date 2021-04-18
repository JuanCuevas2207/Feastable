import ContainerStyles from './Container.module.css';
import Register from '../register/Register'
import { Link } from 'react-router-dom';

const SignUpContainer = (props) =>{
    return(
        <>
        <div className={ContainerStyles.container}>
            <div className={ContainerStyles.signUpCard}>
                <h1 className={ContainerStyles.header}>Sign Up</h1>
                <h5 className={ContainerStyles.registro}>Already have an account? <Link to="/">Login</Link></h5>
                <Register users={props.users} createUser= {props.createUser}/>
            </div>
        </div>
        </>
    );
};

export default SignUpContainer;