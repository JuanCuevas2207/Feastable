import { useState } from 'react';
import fieldsStyle from './Fields.module.css'
import { withRouter } from 'react-router-dom'

const FillFields = (props) =>{
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const onSubmit = form => {
        form.preventDefault(); //avoids refresh
        setPassword("");
        console.log(props.validate)
        if(props.validate)
            props.history.push("/cart")
    }
    
    const inputUser = form => { //permite que el usuario pueda escribir su nombre de usuario y se muestre
        setUsername(form.target.value)
    }

    const inputPassword = form => {//permite que el usuario pueda escribir su contraseña
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

export default withRouter(FillFields);