import BrandBar from "../Components/brandBar/BrandBar"
import LoginContainer from "../Components/loginContainer/LoginContainer"
import Cart from "./Cart"
import Home from "./Home"
import SignUp from "./SignUp"
import { Component } from 'react'
import { Route, withRouter, Switch } from 'react-router-dom';
import Page404 from "./Page404"
import Settings from "./Settings"
import * as actionCreators from '../Store/actions/authentication'
import { connect } from 'react-redux'
import Recipe from "../Components/recipes/Recipe"

class Login extends Component{
	state = {
		userName: "",
		password: "",
	};

	componentDidMount = () => {
		this.props.onPersistAuthentication();
	};

	componentDidUpdate = () => {
		/*if (this.props.isUserLoggedIn) {
		  this.state.history.replace("/cart");
		}*/
	}

	checkInfo = (userName, password)=>{
		let userData = {
			email: userName,
			password: password,
		}
		this.props.onUserSignIn(userData, () => {
			this.props.history.push("/cart");
		});
	}

    render(){
		return(
			<Switch>
				<Route path="/" exact render = {()=>(
					<>
						<button onClick={() => console.log(this.props.isUserLoggedIn)}></button>
						<button onClick={() => console.log(this.props.userLoggedIn)}></button>
						<BrandBar />
						<LoginContainer checkInfo={this.checkInfo} errorMessage = {this.props.message}/>
					</>
				)}></Route>

				<Route path="/cart" exact render = {()=>(	
					<Cart></Cart>
				)}></Route>

				<Route path = "/desayunos" render= {()=><Home/>}></Route>
				<Route path = "/platos-fuertes" render= {()=><Home/>}></Route>
				<Route path = "/ensaladas" render= {()=><Home/>}></Route>
				<Route path = "/sopas" render= {()=><Home/>}></Route>
				<Route path = "/snacks" render= {()=><Home/>}></Route>
				<Route path = "/postres" render= {()=><Home/>}></Route>
				<Route path = "/healthy" render= {()=><Home/>}></Route>

				<Route path = "/recipie" render= {()=><Recipe></Recipe>}></Route>

				<Route path = "/settings" render= {()=><Settings></Settings>}></Route>
				<Route path = "/signUp" render= {()=><SignUp></SignUp>}></Route>

				<Route path = "*" render= {()=><Page404/>}></Route>
			</Switch>
		)
	}
}

const mapStateToProps = (state)=>{
	return{
		isUserLoggedIn: state.loggedStore.isUserLoggedIn,
		userLoggedIn: state.loggedStore.userLoggedIn,
		message: state.signInErrorStore.message,
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
		onUserSignIn: (authData, onSuccessCallback) =>
        	dispatch(actionCreators.signIn(authData, onSuccessCallback)),
		onPersistAuthentication: () =>
      		dispatch(actionCreators.persistAuthentication()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));