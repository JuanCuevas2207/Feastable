import { useState } from 'react';
import fieldsStyle from './Fields.module.css'

const FillFields = (props) =>{
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const onSubmit = form => {
        form.preventDefault(); //avoids refresh
        setPassword("");
    }
    
    const inputUser = form => { //permite que el usuario pueda escribir y se muestre en el input
        setUsername(form.target.value)
    }

    const inputPassword = form => {//permite que el usuario pueda escribir y se muestre en el input
        setPassword(form.target.value)
    }

    return(
        <div>
            <form onSubmit={onSubmit} className={fieldsStyle.form} autoComplete={"off"}>
                <label>Usuario</label>
                <input 
                    type= "text"
                    placeholder = "Escriba su usuario"
                    value = {username}
                    name = "username"
                    className = {fieldsStyle.field}
                    onChange = {inputUser}
                />
                <label>Contraseña</label>
                <input 
                    type= "password"
                    placeholder = "Escriba su contraseña"
                    value = {password}
                    name = "password"
                    className = {fieldsStyle.field}
                    onChange = {inputPassword}
                />
                <button className={fieldsStyle.buttons} onClick={() => props.fields(username, password)}>Buscar</button>           
            </form>            
        </div>
    );
};

export default FillFields;