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

                <input type="checkbox" className={fieldsStyle.checkBox}></input> 
                <h6 className={fieldsStyle.checkBoxLabel}>Remember me</h6>
      
                
                <button type="button" className={fieldsStyle.buttons} onClick={() => onSend()}>INGRESAR</button>
                <p className={fieldsStyle.wrongLogin}>{props.errorMessage}</p>
            </form>            
    );
};

export default withRouter(FillFields);