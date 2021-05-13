import { Component } from 'react';
import Details from "../Components/recipeDetails/Details";
import { withRouter } from 'react-router-dom';

class RecipeDetails extends Component{
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

export default withRouter(RecipeDetails);