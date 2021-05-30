import { Component } from 'react';
import Details from "../Components/recipeDetails/Details";
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux'

class RecipeDetails extends Component{
    componentDidUpdate(){
        if(!this.props.isUserLoggedIn)
            this.props.history.push("/")
    }

    render(){
        return(
            <div> 
                <Details 
                    title={this.props.location.state.title}
                    duration={this.props.location.state.duration}
                    rating={this.props.location.state.rating}                   
                    imageURL={this.props.location.state.imageURL}>
                </Details>
            </div>
        )
    }

}

const mapStateToProps = (state)=>{
	return{
		isUserLoggedIn: state.loggedStore.isUserLoggedIn,
	}
}

export default connect(mapStateToProps, null)(withRouter(RecipeDetails));