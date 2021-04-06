import BrandBar from "./componentsLogin/brandBar/BrandBar"
import Container from "./componentsLogin/container/Container"
import axiosInstance from "./axiosComponents/axiosInstance"
import Cart from "./Cart"
import { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

class Login extends Component{

	state = {
		validate : false,
		users:[],
	}
	
	componentDidMount(){
		axiosInstance.get("/usersData.json")
		.then(response=>{
		  this.setState({
			users: response.data.user,
		  })
		  
		}).catch(error=>
		  console.log(error)
		);
	}

	checkInfo = (userName, password)=>{
		this.state.users.forEach(user => {
				if(user.userName.toLowerCase() === userName.toLowerCase() && user.password === password){
					this.setState({
						validate: true
					});
				}
		});
		if(this.state.validate===true){
			console.log("You are in")
		}
	}

    render(){
		return(
			<BrowserRouter>
			<Route path="/" exact render = {()=>(
				<>
				<BrandBar /> 
				<Container checkInfo={this.checkInfo} validate={this.state.validate}/>
				</>
			)}></Route>

			<Route path="/cart" exact render = {()=>(	
				<Cart></Cart>
			)}></Route>
				
			</BrowserRouter>
				
		)
	}
}

export default Login;