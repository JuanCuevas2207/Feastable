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
        if(validateRegister(username, password, passwordConf)){
            console.log("SUCCESSFUL SIGN UP");
            props.createUser(username, password);
        }
        
    }
    
    const validateRegister = (userName, password, passwordConf) =>{
        var validRegister = false;
        var validUserName = true;
        var validPasswords = false;
        
        //checks the username doesnt already exists
        props.users.forEach(user => {
            if(user.userName.toLowerCase() === userName.toLowerCase()){
                setMessage("Username already exists");
                validUserName=false;
            }
        });

         //checks that the passwords match
        if(password === passwordConf){
            validPasswords = true;
        }else{
            setMessage("Passwords are not the same");
        }

        //checks that the passwords have at least 8 characters
        if(password.length <= 7){
            validPasswords = false;
            setMessage("Password needs to be at least 8 characters");
        }

        if(validPasswords===true && validUserName===true){
            validRegister = true;
            setMessage("");
            props.history.push("/");
        }

        return validRegister;
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

            <p className={fieldsStyle.wrongForm}>{invalidSignUp}</p>

        </form>            
    );
};

export default withRouter(Register);