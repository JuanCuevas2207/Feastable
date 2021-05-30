import NavigationBar from "../Components/homeNavigationBar/NavigationBar";
import {Component} from 'react'
import SettingsSideBar from "../Components/settingsSideBar/SettingsSideBar";
import UserName from "../Components/userName/UserName";
import InfoContainer from "../Components/infoContainer/InfoContainer";
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Cart from "./Cart";
import Home from "./Home";
import RecipeDetails from "./RecipeDetails";
import SignUp from "./SignUp";

class Settings extends Component{
	componentDidUpdate(){
        if(!this.props.isUserLoggedIn){
			this.props.history.push("/")
		}
    }

	render(){
		return(
			<BrowserRouter>
				<Route path = "/settings" render= {()=>{
					return(
						<div> 
							<button onClick={() => console.log(this.props.isUserLoggedIn)}></button>
							<NavigationBar></NavigationBar>
							<SettingsSideBar></SettingsSideBar>
							<UserName></UserName>
							<InfoContainer></InfoContainer>
						</div>
					)
				}}></Route>

				<Route path="/cart" exact render = {()=>(	
					<Cart></Cart>
				)}></Route>

				<Route path = "/desayunos" render= {()=><Home></Home>}></Route>
				<Route path = "/platos-fuertes" render= {()=><Home></Home>}></Route>
				<Route path = "/ensaladas" render= {()=><Home></Home>}></Route>
				<Route path = "/sopas" render= {()=><Home></Home>}></Route>
				<Route path = "/snacks" render= {()=><Home></Home>}></Route>
				<Route path = "/postres" render= {()=><Home></Home>}></Route>
				<Route path = "/healthy" render= {()=><Home></Home>}></Route>

				<Route path = "/details" exact render = {()=><RecipeDetails></RecipeDetails>}></Route>

				<Route path = "/signUp" render= {()=><SignUp></SignUp>}></Route>
			</BrowserRouter>
		)
	}
} 
	
const mapStateToProps = (state)=>{
	return{
		isUserLoggedIn: state.loggedStore.isUserLoggedIn,
	}
}

export default connect(mapStateToProps, null)(withRouter(Settings));
