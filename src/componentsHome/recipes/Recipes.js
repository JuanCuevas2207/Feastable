import recipeStyles from './Recipes.module.css';
import "C:/Program Projects/Visual Studio Code/React/Feastable/node_modules/bootstrap/dist/css/bootstrap.css"

const Recipe = (props) =>(
  <div className={[recipeStyles.recipe, 'py-3'].join(" ")}>
    <h6 className={recipeStyles.time}>{props.time} min</h6>
    <h2 className={recipeStyles.recipeName}>{props.name}</h2>
    <h6 className={recipeStyles.rating}>{props.rating} stars</h6>
  </div>
);

const recipesData = [
	{id: 1, name:"Ensalada 1", time:"25", rating:"3.5"}, 
	{id: 2, name:"Ensalada 2", time:"60", rating:"4.0"},
	{id: 3, name:"Ensalada 3", time:"45", rating:"4.9"},
	{id: 4, name:"Ensalada 4", time:"50", rating:"2.0"},
	{id: 5, name:"Ensalada 5", time:"30", rating:"4.9"},
	{id: 6, name:"Ensalada 6", time:"22", rating:"2.0"}
];

const recipes = recipesData.map(recipeData => <Recipe key = {recipeData.id}  {...recipeData} />);

const Recipes = () => ( 
  <div className={"container"}>
     <div className={'row justify-content-center m-6'}>
      {recipes}
    </div>
  </div>
);

export default Recipes;