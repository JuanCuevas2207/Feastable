import BrandBar from "./componentsLogin/brandBar/BrandBar"
import Container from "./componentsLogin/container/Container"
import axiosInstance from "./axiosComponents/axiosInstance"
import Cart from "./Cart"
import Home from "./Home"
import { Component } from 'react'
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

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

    render(){
		return(
			<div>
				<Route path="/" exact render = {()=>(
					<>
						<BrandBar /> 
						<Container checkInfo={this.checkInfo} validate={this.state.validate}/>
					</>
				)}></Route>

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