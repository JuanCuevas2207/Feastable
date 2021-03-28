import NavigationBar from "./componentsHome/navigationBar/NavigationBar";
import CategoryBar from "./componentsHome/categoryBar/CategoryBar";
import {Component} from 'react'
import axiosInstance from "./axiosComponents/axiosInstance"


class Home extends Component{

	state = {
		breakfastRecipes: [],
		mainRecipes: [],
		saladRecipes: [],
		soupRecipes: [],
		snackRecipes: [],
		dessertRecipes: [],
		healthyRecipes: [],
	  }
	
	  componentDidMount(){
		axiosInstance.get("/recipesData.json")
		.then(response=>{
		  
		  this.setState({
			breakfastRecipes: response.data.breakfasts,
			mainRecipes: response.data.main,
			saladRecipes: response.data.salads,
			soupRecipes: response.data.soups,
			snackRecipes: response.data.snacks,
			dessertRecipes: response.data.desserts,
			healthyRecipes: response.data.healthy
		  })
		  
		}).catch(error=>
		  console.log(error)
		);
	  } 

	render(){
		return(
			<div> 
				<NavigationBar /> 
				<CategoryBar 
					breakfastRecipes = {this.state.breakfastRecipes}
					mainRecipes= {this.state.mainRecipes}
					saladRecipes= {this.state.saladRecipes}
					soupRecipes= {this.state.soupRecipes}
					snackRecipes= {this.state.snackRecipes}
					dessertRecipes= {this.state.dessertRecipes}
					healthyRecipes= {this.state.healthyRecipes}
					id= {this.props.id}
				/>
			</div>
		)
	}
} 
	
export default Home;
