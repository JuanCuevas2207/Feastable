import { useState } from 'react';
import NavStyles from './NavigationBar.module.css';

const NavigationBar = () =>{

    const[input, setInput] = useState("");
  
    const onSubmit = form => {
      form.preventDefault(); //avoids refresh
    }
  
    const search = ()=>{
      setInput("")
    }
  
    const inputText = form => {     //permite que el usuario pueda escribir y se muestre en el input
      setInput(form.target.value)
    }
    
    return(
        <div className={NavStyles.navigationBar}>
            <div className={NavStyles.header}>
              
                <div>
                    <img src="assets/logo.png" alt="Logo" className={NavStyles.logo}></img> 
                </div>
              
         
                <div>
                    <form onSubmit={onSubmit} className={NavStyles.form}>
                        <input 
                            type= "text"
                            placeholder = "Buscar un alimento..."
                            value = {input}
                            name = "text"
                            className = {NavStyles.buscador}
                            onChange = {inputText}
                        />           
                         <button className={NavStyles.button} onClick={search}>Buscar</button>
                    </form>
                </div>

                <div className={NavStyles.espacio}></div>
            </div>
        </div>
    );
};

export default NavigationBar;