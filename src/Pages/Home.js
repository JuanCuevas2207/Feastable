import CategoryBar from "../Components/categoryBar/CategoryBar";
import {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actionCreators from '../Store/actions/recipes'
import Spinner from "../Components/spinner/Spinner";

class Home extends Component{
	
	state = {
		breakfastRecipes: {},
		dessertRecipes: {},
		healthyRecipes: {},
		mainRecipes: {},
		saladRecipes: {},
		snackRecipes: {},
		soupRecipes: {},
	}
		
	componentDidMount(){
		this.props.onFetchRecipes(this.changeState);
	}

	componentDidUpdate(){
        if(!this.props.isUserLoggedIn)
            this.props.history.push("/")
    }

	changeState = ()=>{
		this.setState({
			breakfastRecipes: {...this.props.recipes[0]},
			dessertRecipes: {...this.props.recipes[1]},
			healthyRecipes: {...this.props.recipes[2]},
			mainRecipes: {...this.props.recipes[3]},
			saladRecipes: {...this.props.recipes[4]},
			snackRecipes: {...this.props.recipes[5]},
			soupRecipes: {...this.props.recipes[6]},
		})
	}

	renderContent= () => {
		let content = <CategoryBar 
		breakfastRecipes = {this.state.breakfastRecipes}
		mainRecipes= {this.state.mainRecipes}
		saladRecipes= {this.state.saladRecipes}
		soupRecipes= {this.state.soupRecipes}
		snackRecipes= {this.state.snackRecipes}
		dessertRecipes= {this.state.dessertRecipes}
		healthyRecipes= {this.state.healthyRecipes}
		/>
	
		if (this.props.loadingRecipes) {
		  content = <Spinner></Spinner>
		}
	
		return content;
	};

	render(){
		return(
			<div>
				{this.renderContent()}
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return{
		isUserLoggedIn: state.loggedStore.isUserLoggedIn,
		recipes: state.recipesStore.recipes,
		loadingRecipes: state.recipesStore.loadingRecipes,
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
		onFetchRecipes: (onSuccessCallback) => {
			dispatch(actionCreators.fetchRecipes(onSuccessCallback));
		}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
