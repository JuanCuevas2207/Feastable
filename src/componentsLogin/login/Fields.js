import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import fieldsStyle from './Fields.module.css'

const FillFields = (props) =>{

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const onSubmit = form => {
        form.preventDefault(); //avoids refresh
    }

    const onSend = () =>{
        setPassword("");
        props.checkInfo(username, password)
    }
    
    const inputUser = form => { //permite que el usuario pueda escribir su nombre de usuario y se muestre
        setUsername(form.target.value)
    }

    const inputPassword = form => {//permite que el usuario pueda escribir su contraseña
        setPassword(form.target.value)
    }

    return(
            <form onSubmit={onSubmit} className={fieldsStyle.form} autoComplete={"off"}>
                
                <div className={fieldsStyle.line}>
                    <div className={fieldsStyle.titleSpace}>
                        <h6 className={fieldsStyle.title}>Usuario</h6>
                    </div>

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
                </div>

                <div className={fieldsStyle.line}>
                    <div className={fieldsStyle.titleSpace}>
                        <h6 className={fieldsStyle.title}>Contraseña</h6>
                    </div>

                    <div className={fieldsStyle.inputSpace}>
                    <input 
                    type= "password"
                    placeholder = "Escriba su contraseña"
                    value = {password}
                    name = "password"
                    className = {fieldsStyle.field}
                    onChange = {inputPassword}
                    />
                    </div>
                </div>                 
                
                <button type="button" className={fieldsStyle.buttons} onClick={() => onSend()}>INGRESAR</button>
                {props.validate ? <p></p> : <p className={fieldsStyle.wrongLogin}>Usuario y/o contraseña incorrectos</p>}           
            </form>            
    );
};

export default withRouter(FillFields);