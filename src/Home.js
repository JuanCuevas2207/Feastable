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
	
		  const updatedBreakfastRecipes= response.data.breakfasts.map(recipe=>{return {id: recipe.id, name: recipe.name, rating: recipe.rating, time: recipe.time, image: recipe.image}});
		  const updatedMainRecipes= response.data.main.map(recipe=>{return {id: recipe.id, name: recipe.name, rating: recipe.rating, time: recipe.time, image: recipe.image}});
		  const updatedSaladRecipes= response.data.salads.map(recipe=>{return {id: recipe.id, name: recipe.name, rating: recipe.rating, time: recipe.time, image: recipe.image}});
		  const updatedSoupRecipes= response.data.soups.map(recipe=>{return {id: recipe.id, name: recipe.name, rating: recipe.rating, time: recipe.time, image: recipe.image}});
		  const updatedSnackRecipes= response.data.snacks.map(recipe=>{return {id: recipe.id, name: recipe.name, rating: recipe.rating, time: recipe.time, image: recipe.image}});
		  const updatedDessertRecipes= response.data.desserts.map(recipe=>{return {id: recipe.id, name: recipe.name, rating: recipe.rating, time: recipe.time, image: recipe.image}});
		  const updatedHealthyRecipes= response.data.healthy.map(recipe=>{return {id: recipe.id, name: recipe.name, rating: recipe.rating, time: recipe.time, image: recipe.image}});
	
		  
		  this.setState({
			breakfastRecipes: updatedBreakfastRecipes,
			mainRecipes: updatedMainRecipes,
			saladRecipes: updatedSaladRecipes,
			soupRecipes: updatedSoupRecipes,
			snackRecipes: updatedSnackRecipes,
			dessertRecipes: updatedDessertRecipes,
			healthyRecipes: updatedHealthyRecipes
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
