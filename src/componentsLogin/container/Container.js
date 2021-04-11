import ContainerStyles from './Container.module.css';
import Fields from '../login/Fields'

const Container = (props) =>{
    return(
        <>
        <div className={ContainerStyles.container}>
            <div className={ContainerStyles.loginCard}>
                <h1 className={ContainerStyles.header}>Log In</h1>
                <h5 className={ContainerStyles.registro}>¿Doesn't have an account yet? <a href="/">Sign Up</a></h5>
                <Fields checkInfo={props.checkInfo} validate={props.validate}/>
            </div>
        </div>
        <button className={ContainerStyles.provisional} onClick={()=>props.createUser("Cristian", "1234")}>SIGN UP A CRISTIAN</button>
        <button className={ContainerStyles.provisional} onClick={()=>console.log(props.users)}>VER TODOS LOS USUARIOS</button>
        </>
    );
};

export default Container;