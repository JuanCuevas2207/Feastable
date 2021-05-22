import BrandBar from "../Components/brandBar/BrandBar"
import SignUpContainer from "../Components/signUpContainer/SignUpContainer"
import { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from "react-redux"
import * as actionCreators from '../Store/actions/authentication'

class SignUp extends Component{

    render(){
		return(
			<div>
                <Route path="/signUp" exact render = {()=>(
                    <>
                        <BrandBar />
                        <SignUpContainer submit= {this.props.onUserSignUp} users={this.props.users} errorMessage={this.props.message}/>
                    </>
				)}></Route>		
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return{
		isLogged: state.loggedStore.isLogged,
        message: state.signUpErrorStore.message,
	}
}


const mapDispatchToProps = (dispatch) => {
    return {
      onUserSignUp: (authData, isMatch) =>
        dispatch(actionCreators.signUp(authData, isMatch)),
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);