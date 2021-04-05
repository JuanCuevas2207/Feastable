import { useState } from 'react';
import fieldsStyle from './Fields.module.css'
import axiosInstance from "../../axiosComponents/axiosInstance"

const FillFields = () =>{
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const onSubmit = form => {
        form.preventDefault(); //avoids refresh
    }

    const checkUser = ()=>{
        axiosInstance.get("/usersData.json")
        .then(response =>{

            response.forEach(element => {
                if(element.data.user.userName.equals(username))
                console.log("Si existe")
                else
                console.log("No existe")
            });

        }).catch(error=>
            console.log(error)
        );

        setPassword("")
    }
    
    const inputUser = form => {     //permite que el usuario pueda escribir y se muestre en el input
        setUsername(form.target.value)
    }

    const inputPassword = form => {     //permite que el usuario pueda escribir y se muestre en el input
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
                    name = "text"
                    className = {fieldsStyle.field}
                    onChange = {inputUser}
                />
                <label>Contraseña</label>
                <input 
                    type= "text"
                    placeholder = "Escriba su contraseña"
                    value = {password}
                    name = "text"
                    className = {fieldsStyle.field}
                    onChange = {inputPassword}
                />
                <button className={fieldsStyle.buttons} onClick={checkUser}>Buscar</button>           
            </form>            
        </div>
    );
};

export default FillFields;