import { useState } from 'react';
import NavBarStyles from './NavigationBar.module.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
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
        <img src="assets/icons/logo.png" height="35px" alt="Logo" className ={'float-left'}></img> 
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
          <img className={['mx-md-2 mx-1', NavBarStyles.menuImg].join(" ")} src="assets/icons/add.png" alt="Add icon" height="33px"></img>
          <img className={['mx-md-2 mx-1', NavBarStyles.menuImg].join(" ")} src="assets/icons/save.png" alt="Save icon" height="30px"></img>
          <img onClick={()=>props.history.push("/cart")} className={['mx-md-2 mx-1', NavBarStyles.menuImg].join(" ")} src="assets/icons/shopping-cart.png" alt="Shopping icon" height="30px"></img>
          <img onClick={()=>props.history.push("/")} className={['mx-md-2 mx-1 rounded-circle', NavBarStyles.menuImg].join(" ")} src="assets/icons/profile-pic.jpg" alt="Profile icon" height="30px" width="30px"></img>
        </div>
      </div>   
    </div>
  )
};

export default withRouter(NavigationBar);
