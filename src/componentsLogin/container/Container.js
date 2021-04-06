import ContainerStyles from './Container.module.css';
import Fields from '../login/Fields'

const Container = (props) =>{
    return(
        <div className={ContainerStyles.container}>
            <div className={ContainerStyles.loginCard}>
                <h1 className={ContainerStyles.header}>Log In</h1>
                <Fields checkInfo={props.checkInfo} validate={props.validate}/>
            </div>
        </div>
    );
};

export default Container;