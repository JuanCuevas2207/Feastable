import ContainerStyles from './Container.module.css';
import Fields from '../login/Fields'

const Container = (props) =>{
    const handleGetData = (user, password) =>{
        props.getUserData(user, password);
    } 

    return(
        <div className={ContainerStyles.container}>
            <div className={ContainerStyles.loginCard}>
                <h1 className={ContainerStyles.header}>Login</h1>
                <Fields fields={handleGetData}/>
            </div>
        </div>
    );
};

export default Container;