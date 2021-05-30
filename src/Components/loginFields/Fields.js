import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import fieldsStyle from './Fields.module.css'
import {connect} from 'react-redux'
import MiniSpinner from '../miniSpinner/MiniSpinner';

const FillFields = (props) =>{

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const onSubmit = form => {
        form.preventDefault(); //avoids refresh
    }

    const onSend = () =>{
        props.checkInfo(username, password)
    }
    
    const inputUser = form => { //permite que el usuario pueda escribir su nombre de usuario y se muestre
        setUsername(form.target.value)
    }

    const inputPassword = form => {//permite que el usuario pueda escribir su contraseña
        setPassword(form.target.value)
    }

    const renderSubmitButton = () => {
        let content = <button type="button" className={fieldsStyle.buttons} onClick={() => onSend()}>INGRESAR</button>
            
        if (props.loadingAuth) {
          content = <MiniSpinner></MiniSpinner>
        }
        return content;
    };

    return(
            <form onSubmit={onSubmit} className={fieldsStyle.form} autoComplete={"off"}>
                
                <h6 className={fieldsStyle.title}>E-mail</h6>

                <div className={fieldsStyle.inputSpace}>
                    <input 
                    type= "text"
                    placeholder = "Escriba su email"
                    value = {username}
                    name = "username"
                    className = {fieldsStyle.field}
                    onChange = {inputUser}
                    />
                </div>

                <h6 className={fieldsStyle.title}>Contraseña</h6>

                <input 
                type= "password"
                placeholder = "Escriba su contraseña"
                value = {password}
                name = "password"
                className = {fieldsStyle.field}
                onChange = {inputPassword}
                />          
                
                {renderSubmitButton()}
                <p className={fieldsStyle.wrongLogin}>{props.errorMessage}</p>
            </form>            
    );
};

const mapStateToProps = (state)=>{
	return{
        loadingAuth: state.loggedStore.loadingAuth
	}
}

export default connect(mapStateToProps, null)(withRouter(FillFields));