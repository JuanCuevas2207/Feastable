import BrandBar from "./componentsLogin/brandBar/BrandBar"
import SignUpContainer from "./componentsLogin/container/SignUpContainer"
import { Component } from 'react'
import { Route } from 'react-router-dom'

class SignUp extends Component{

    state = {
        validateUser: true,
        validatePassword: true,
		users:[]
	}

    componentDidMount(){
		this.setState({ users: this.props.users })
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

    validateRegister = (userName, password, passwordConf) =>{
        this.state.users.forEach(user => {
            if(user.userName.toLowerCase() === userName.toLowerCase()){
                console.log("Register no success user name already exist")
                this.setState({ validatePassword: true })
                this.setState({ validateUser: false })
            }
        });

        if(password !== passwordConf){
            console.log("Register no success passwords are not the same")
            this.setState({ validateUser: true })
            this.setState({ validatePassword: false })
        }
    }

    render(){
		return(
			<div>
                <Route path="/signUp" exact render = {()=>(
                    <>
                        <BrandBar />
                        <SignUpContainer users={this.state.users} validateRegister={this.validateRegister} validateUser={this.state.validateUser} validatePassword={this.state.validatePassword} createUser={this.createUser}/>
                    </>
				)}></Route>		
			</div>
		)
	}
}

export default SignUp;