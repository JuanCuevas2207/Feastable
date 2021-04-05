import BrandBar from "./componentsLogin/brandBar/BrandBar"
import Container from "./componentsLogin/container/Container"
import { Component } from 'react'

class Login extends Component{
    render(){
		return(
			<div> 
				<BrandBar /> 
				<Container />
			</div>
		)
	}
}

export default Login;