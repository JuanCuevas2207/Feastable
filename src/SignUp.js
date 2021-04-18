import BrandBar from "./componentsLogin/brandBar/BrandBar"
import SignUpContainer from "./componentsSignUp/container/SignUpContainer"
import { Component } from 'react'
import { Route } from 'react-router-dom'

class SignUp extends Component{

    render(){
		return(
			<div>
                <Route path="/signUp" exact render = {()=>(
                    <>
                        <BrandBar />
                        <SignUpContainer users={this.props.users} createUser={this.props.createUser}/>
                    </>
				)}></Route>		
			</div>
		)
	}
}

export default SignUp;