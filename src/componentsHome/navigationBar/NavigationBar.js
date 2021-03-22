import { useState } from 'react';
import NavBarStyles from './NavigationBar.module.css';
import "C:/Program Projects/Visual Studio Code/React/Feastable/node_modules/bootstrap/dist/css/bootstrap.css"
import { withRouter } from 'react-router-dom'

const NavigationBar = (props) =>{
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
    <div className={[NavBarStyles.header, 'py-2 align-items-center'].join(" ")}>  

      <div className={'px-md-5 px-sm-4 px-3'}>
        <img src="assets/logo.png" height="35px" alt="Logo" className ={'float-left'}></img> 
      </div>

      <form onSubmit={onSubmit} className={NavBarStyles.form}>
          <input 
            type= "text"
            placeholder = "Buscar una receta..."
            value = {input}
            name = "text"
            className = {[NavBarStyles.buscador, 'col-9'].join(" ")}
            onChange = {inputText}
          />           
          <button className={[NavBarStyles.button, 'col-3'].join(" ")} onClick={search}>Buscar</button>
        </form>

      <div className={'px-md-5 px-sm-3'}>
        <div className={'float-right'}>
          <a><img className={['mx-md-2 mx-1', NavBarStyles.menuImg].join(" ")} src="assets/add.png" alt="Add icon" height="33px"></img></a>
          <a><img className={['mx-md-2 mx-1', NavBarStyles.menuImg].join(" ")} src="assets/save.png" alt="Save icon" height="30px"></img></a>
          <a onClick={()=>props.history.push("/")}><img className={['mx-md-2 mx-1', NavBarStyles.menuImg].join(" ")} src="assets/shopping-cart.png" alt="Shopping icon" height="30px"></img></a>
          <a><img className={['mx-md-2 mx-1 rounded-circle', NavBarStyles.menuImg].join(" ")} src="assets/profile-pic.jpg" alt="Picture icon" height="30px" width="30px"></img></a>
        </div>
      </div>   
    </div>
  )
};

export default withRouter(NavigationBar);
