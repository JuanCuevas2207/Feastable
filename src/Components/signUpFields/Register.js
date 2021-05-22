import { useState } from 'react';
import fieldsStyle from '../signUpFields/Register.module.css'
import {withRouter} from 'react-router-dom'

const Register = (props) =>{

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[passwordConf, setPasswordConf] = useState("");
    const[invalidSignUp, setMessage] = useState("");

    const inputUser = form => {
        setUsername(form.target.value)
    }

    const inputPassword = form => {
        setPassword(form.target.value)
    }

    const inputPasswordConf = form => {
        setPasswordConf(form.target.value)
    }

    const onSubmit = form => {
        form.preventDefault(); //avoids refresh
    }

    const onSend = () =>{
        //checks that the passwords match
        let isMatch = false;
        if(password === passwordConf){
            isMatch = true;
        }
        
        const userData = {
            email : username,
            password: password,
        }
        props.submit(userData, isMatch)
    }
    
    return(
        <form onSubmit={onSubmit} className={fieldsStyle.form} autoComplete={"off"}>
                
            <h6 className={fieldsStyle.title}>E-mail </h6>

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

            <h6 className={fieldsStyle.title}>Confirmar contraseña</h6>

            <input 
            type= "password"
            placeholder = "Confirme su contraseña"
            value = {passwordConf}
            name = "passwordConf"
            className = {fieldsStyle.field}
            onChange = {inputPasswordConf}
            />  
            
            <button type="button" className={fieldsStyle.buttons} onClick={() => onSend()}>REGISTRAR</button>

            <p className={fieldsStyle.wrongForm}>{props.errorMessage}</p>

        </form>            
    );
};

export default withRouter(Register);