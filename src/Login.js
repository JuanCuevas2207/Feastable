import BrandBar from "./componentsLogin/brandBar/BrandBar"
import LoginContainer from "./componentsLogin/container/LoginContainer"
import axiosInstance from "./axiosComponents/axiosInstance"
import Cart from "./Cart"
import Home from "./Home"
import SignUp from "./SignUp"
import { Component } from 'react'
import { Route, withRouter  } from 'react-router-dom';

class Login extends Component{

	state = {
		validate: true,
		users:[]
	}
	
	componentDidMount(){
		axiosInstance.get("/usersData.json")
		.then(response=>{
		  this.setState({ users: response.data.user })
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
			<div>
				<Route path="/" exact render = {()=>(
					<>
						<BrandBar /> 
						<LoginContainer checkInfo={this.checkInfo} validate={this.state.validate} users={this.state.users} createUser={this.createUser}/>
					</>
				)}></Route>

				<Route path = "/signUp" render= {()=><SignUp users={this.state.users} />}></Route>

				<Route path="/cart" exact render = {()=>(	
					<Cart></Cart>
				)}></Route>

				<Route path = "/desayunos" render= {()=><Home id="1"/>}></Route>
				<Route path = "/platos-fuertes" render= {()=><Home id="2"/>}></Route>
				<Route path = "/ensaladas" render= {()=><Home id="3"/>}></Route>
				<Route path = "/sopas" render= {()=><Home id="4"/>}></Route>
				<Route path = "/snacks" render= {()=><Home id="5"/>}></Route>
				<Route path = "/postres" render= {()=><Home id="6"/>}></Route>
				<Route path = "/healthy" render= {()=><Home id="7"/>}></Route>
			</div>
		)
	}
}

export default withRouter(Login);