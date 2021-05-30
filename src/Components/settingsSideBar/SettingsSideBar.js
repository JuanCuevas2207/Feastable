import {Component} from 'react'
import sideBarStyles from '../settingsSideBar/SettingsSideBar.module.css'
import SideBarOption from '../sideBarOption/SideBarOption'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actionCreators from '../../Store/actions/authentication'

class SettingsSideBar extends Component{
    render(){
        return(
                <div className={sideBarStyles.container}>
                    <SideBarOption logo="assets/icons/settings.png" name="Configuración de la Cuenta"></SideBarOption>
                    <SideBarOption logo="assets/icons/favorite.png" name="Recetas Favoritas"></SideBarOption>
                    <SideBarOption logo="assets/icons/recipe.png" name="Mis Recetas"></SideBarOption>
                    <SideBarOption logo="assets/icons/cart.png" name="Mi Carrito"></SideBarOption>
                    <div className={sideBarStyles.logOutContainer} onClick={this.props.onLogOut}>
                        <img src='assets/icons/exit.png' className={sideBarStyles.logo} alt="logo"></img>
                        <h1 className={sideBarStyles.label}>Cerrar Sesión</h1>
                    </div>
                </div>    
        );
    }
}

const mapDispatchToProps = (dispatch)=>{
	return{
		onLogOut: () => dispatch(actionCreators.logOut())
	}
}

export default connect(null, mapDispatchToProps)(withRouter(SettingsSideBar));