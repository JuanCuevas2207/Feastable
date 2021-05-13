import NavigationBar from "../Components/homeNavigationBar/NavigationBar";
import {Component} from 'react'
import SettingsSideBar from "../Components/settingsSideBar/SettingsSideBar";
import UserName from "../Components/userName/UserName";
import InfoContainer from "../Components/infoContainer/InfoContainer";
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Cart from "./Cart";
import Home from "./Home";
import Login from "./Login";
import RecipeDetails from "./RecipeDetails";

class Settings extends Component{

	componentDidMount() {
		if(!this.props.isLogged){
				this.props.history.push("/");
		}
	}

	render(){
		return(
			<BrowserRouter>
				<Route path = "/settings" render= {()=>{
					return(
						<div> 
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

				<Route path="/" exact render = {()=><Login></Login>}></Route>

			</BrowserRouter>
		)
	}
} 
	

const mapStateToProps = (state)=>{
	return{
		isLogged: state.loggedStore.isLogged
	}
}

export default connect(mapStateToProps, null)(withRouter(Settings));
