import BrandBar from "./componentsLogin/brandBar/BrandBar"
import Container from "./componentsLogin/container/Container"
import axiosInstance from "./axiosComponents/axiosInstance"
import Cart from "./Cart"
import { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import {withRouter} from 'react-router-dom'

class Login extends Component{
	
	state = {
		users: []
	};

	validateUser(userName, password){
		axiosInstance.get("/usersData.json")
		.then(response => {
			response.data.user.forEach(user => {
				if(user.userName.toLowerCase() === userName.toLowerCase() && user.password === password){
					console.log("El usuario ingreso exitosamente")
					this.state.history.push("/cart")
				}else{
					console.log("La contraseña o el nombre de usuario son incorrectos")
				}
			});
		}).catch(error=>
			console.log(error)
		);
	}

    render(){
		return(
			<BrowserRouter>
			    <Route path = "/" exact render= {()=>(
					<>
				        <BrandBar /> 
				        <Container getUserData={this.validateUser}/>
					</>
				)}>
				</Route>
				<Route path = "/cart" exact render= {()=><Cart />}></Route>
			</BrowserRouter>
		)
	}
}

export default Login;