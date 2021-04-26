import NavigationBar from "../Components/homeNavigationBar/NavigationBar";
import CategoryBar from "../Components/categoryBar/CategoryBar";
import {Component} from 'react'
import axiosInstance from "../Components/axios/axiosInstance"


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
				/>
			</div>
		)
	}
} 
	
export default Home;
