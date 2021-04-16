import ContainerStyles from './Container.module.css';
import Register from '../register/Register'
import { Link } from 'react-router-dom';

const LoginContainer = (props) =>{
    return(
        <>
        <div className={ContainerStyles.container}>
            <div className={ContainerStyles.loginCard}>
                <h1 className={ContainerStyles.header}>Sign Up</h1>
                <h5 className={ContainerStyles.registro}>Already have an account? <Link to="/">Login</Link></h5>
                <Register checkInfo={props.checkInfo} validateRegister={props.validateRegister} validateUser={props.validateUser} validatePassword={props.validatePassword} createUser={props.createUser}/>
            </div>
        </div>
        <button className={ContainerStyles.provisional} onClick={()=>console.log(props.users)}>VER TODOS LOS USUARIOS</button>
        </>
    );
};

export default LoginContainer;