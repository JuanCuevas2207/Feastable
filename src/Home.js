//JS components
import NavigationBar from "./componentsHome/navigationBar/NavigationBar";
import CategoryBar from "./componentsHome/categoryBar/CategoryBar";
import Title from "./componentsHome/title/Title";
import Recipe from "./componentsHome/recipes/Recipes"

const Home = () => 
	<div> 
		<NavigationBar /> 
		<CategoryBar /> 
		<Title text={'E N S A L A D A S'}/>
		<Recipe/>
	</div>

export default Home;
