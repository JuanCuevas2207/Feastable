import { useState } from 'react';
import fieldsStyle from '../login/Fields.module.css'

const Register = (props) =>{

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[passwordConf, setPasswordConf] = useState("");

    const onSubmit = form => {
        form.preventDefault(); //avoids refresh
    }

    const onSend = () =>{
        setPassword("");
        setPasswordConf("");
        props.validateRegister(username, password, passwordConf)
    }
    
    const inputUser = form => { //permite que el usuario pueda escribir su nombre de usuario y se muestre
        setUsername(form.target.value)
    }

    const inputPassword = form => { //permite que el usuario pueda escribir su contraseña
        setPassword(form.target.value)
    }

    const inputPasswordConf = form => { //permite que el usuario pueda escribir su confirmación de contraseña
        setPasswordConf(form.target.value)
    }

    return(
        <form onSubmit={onSubmit} className={fieldsStyle.form} autoComplete={"off"}>
                
            <h6 className={fieldsStyle.title}>Nombre de usuario</h6>

            <div className={fieldsStyle.inputSpace}>
                <input 
                type= "text"
                placeholder = "Escriba su usuario"
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
            {props.validateUser ? <p></p> : <p className={fieldsStyle.wrongLogin}>El nombre de usuario ya existe</p>}     
            {props.validatePassword ? <p></p> : <p className={fieldsStyle.wrongLogin}>Las contraseñas no concuerdan</p>} 
        </form>            
    );
};

export default Register;