import BrandBar from "../Components/brandBar/BrandBar"
import LoginContainer from "../Components/loginContainer/LoginContainer"
import axiosInstance from "../Components/axios/axiosInstance"
import Cart from "./Cart"
import Home from "./Home"
import SignUp from "./SignUp"
import { Component } from 'react'
import { Route, withRouter, Switch } from 'react-router-dom';
import Page404 from "./Page404"
import Settings from "./Settings"
import * as actionTypes from '../Store/actions/actions'
import { connect } from 'react-redux'
import Recipe from "../Components/recipes/Recipe"

class Login extends Component{

	state = {
		validate: true,
		users:[]
	}
	
	componentDidMount(){
		axiosInstance.get("/usersData.json")
		.then(response=>{
		  	this.setState({ 
			  users: response.data.user 
			})
		}).catch(error=>
		  console.log(error)
		);
	}

	checkInfo = (userName, password)=>{
		this.state.users.forEach(user => {
				if(user.userName.toLowerCase() === userName.toLowerCase() && user.password === password){
					this.props.history.push("/cart")
					console.log("You are in")
					this.setState({ validate: true })
					this.props.onSignIn()
				}else{
					this.setState({ validate: false })
				}
		});
	}

	createUser = (userName, password)=>{
		const newUser = {
			id: this.state.users.length+1,
			userName: userName,
			password: password,
		}
		const newUsers = [...this.state.users, newUser]
		this.setState({
			users : newUsers
		})
	}

    render(){
		return(
			<Switch>
				<Route path="/" exact render = {()=>(
					<>
						<BrandBar />
						<button onClick={()=>{console.log(this.props.isLogged)}}>IS LOGGED IN?</button>
						<LoginContainer checkInfo={this.checkInfo} validate={this.state.validate} users={this.state.users} createUser={this.createUser}/>
					</>
				)}></Route>

				<Route path = "/signUp" render= {()=><SignUp users={this.state.users} createUser={this.createUser} />}></Route>

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

				<Route path = "*" render= {()=><Page404/>}></Route>
			</Switch>
		)
	}
}

const mapStateToProps = (state)=>{
	return{
		isLogged: state.loggedStore.isLogged
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		onSignIn: ()=>{dispatch({type: actionTypes.SIGN_IN})}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));