import NavigationBar from "../Components/homeNavigationBar/NavigationBar";
import CategoryBar from "../Components/categoryBar/CategoryBar";
import {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actionCreators from '../Store/actions/recipes'

class Home extends Component{

	state = {
		recipes: {...this.props.recipes},
		breakfastRecipes: {...this.props.recipes[0]},
		dessertRecipes: {...this.props.recipes[1]},
		healthyRecipes: {...this.props.recipes[2]},
		mainRecipes: {...this.props.recipes[3]},
		saladRecipes: {...this.props.recipes[4]},
		snackRecipes: {...this.props.recipes[5]},
		soupRecipes: {...this.props.recipes[6]},
	  }

	componentDidMount(){
		this.props.onFetchRecipes();
		
		if(!this.props.isLogged){
			this.props.history.push("/");
		}
	}

	render(){
		return(
			<div>
				<NavigationBar></NavigationBar>

				<CategoryBar 
					breakfastRecipes = {this.state.breakfastRecipes}
					mainRecipes= {this.state.mainRecipes}
					saladRecipes= {this.state.saladRecipes}
					soupRecipes= {this.state.soupRecipes}
					snackRecipes= {this.state.snackRecipes}
					dessertRecipes= {this.state.dessertRecipes}
					healthyRecipes= {this.state.healthyRecipes}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return{
		isLogged: state.loggedStore.isLogged,
		recipes: state.recipesStore.recipes,
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
		onFetchRecipes: () => dispatch(actionCreators.fetchRecipes()),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
