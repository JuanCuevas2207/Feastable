//JS components
import NavigationBar from "./components/navigationBar/NavigationBar";
import CategoryBar from "./components/categoryBar/CategoryBar";
import Title from "./components/title/Title";
import Recipe from "./components/recipes/Recipes"

const App = () => 
	<div> 
		<NavigationBar /> 
		<CategoryBar /> 
		<Title text={'E N S A L A D A S'}/>
		<Recipe/>
	</div>

export default App;
