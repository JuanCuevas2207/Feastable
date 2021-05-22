import {Component} from 'react'
import sideBarStyles from '../settingsSideBar/SettingsSideBar.module.css'
import SideBarOption from '../sideBarOption/SideBarOption'
import * as actionTypes from '../../Store/actions/actionTypes'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class SettingsSideBar extends Component{

    logOutHandler=()=>{
        this.props.onLogOut();
        this.props.history.push("/");
    }

    render(){
        return(
                <div className={sideBarStyles.container}>
                    <button onClick={()=>{console.log(this.props.isLogged)}}>IS LOGGED IN?</button>
                    <SideBarOption logo="assets/icons/settings.png" name="Configuración de la Cuenta"></SideBarOption>
                    <SideBarOption logo="assets/icons/favorite.png" name="Recetas Favoritas"></SideBarOption>
                    <SideBarOption logo="assets/icons/recipe.png" name="Mis Recetas"></SideBarOption>
                    <SideBarOption logo="assets/icons/cart.png" name="Mi Carrito"></SideBarOption>
                    <div className={sideBarStyles.logOutContainer} onClick={()=>{this.logOutHandler()}}>
                        <img src='assets/icons/exit.png' className={sideBarStyles.logo} alt="logo"></img>
                        <h1 className={sideBarStyles.label}>Cerrar Sesión</h1>
                    </div>
                </div>    
        );
    }
}

const mapStateToProps = (state)=>{
	return{
		isLogged: state.loggedStore.isLogged
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		onLogOut: ()=>{dispatch({type: actionTypes.LOG_OUT})}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SettingsSideBar));