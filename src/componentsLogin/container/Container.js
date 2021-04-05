import ContainerStyles from './Container.module.css';
import Fields from '../login/Fields'

const Container = () =>{
    return(
        <div className={ContainerStyles.container}>
            <div className={ContainerStyles.loginCard}>
                <h1>Login</h1>
                <Fields />
            </div>
        </div>
    );
};

export default Container;