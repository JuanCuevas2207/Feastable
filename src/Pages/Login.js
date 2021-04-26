import BrandBar from "../Components/brandBar/BrandBar"
import LoginContainer from "../Components/loginContainer/LoginContainer"
import axiosInstance from "../Components/axios/axiosInstance"
import Cart from "./Cart"
import Home from "./Home"
import SignUp from "./SignUp"
import { Component } from 'react'
import { Route, withRouter} from 'react-router-dom';
import Page404 from "./Page404"

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

				<Route path = "/aa" render= {()=><Page404/>}></Route>
			</div>
		)
	}
}

export default withRouter(Login);