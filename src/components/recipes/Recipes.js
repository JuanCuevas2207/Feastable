import recipeStyles from './Recipes.module.css';
import 'C:/Users/Juan Ma/Documents/Trabajos U Sabana/10mo semestre/Desarrollo con React JS/Feastable/node_modules/bootstrap/dist/css/bootstrap.css';


const Recipe = (props) =>(
  <div className={[recipeStyles.recipe, 'py-3'].join(" ")}>
    <h6 className={recipeStyles.time}>{props.time} min</h6>
    <h2 className={recipeStyles.recipeName}>{props.name}</h2>
    <h6 className={recipeStyles.rating}>{props.rating} stars</h6>
  </div>
);

const recipesData = [
	{name:"Ensalada Marroqui", time:"25", rating:"3.5"},
	{name:"Ensalada Mexicana", time:"60", rating:"4.0"},
	{name:"Ensalada Caesar", time:"45", rating:"4.9"},
	{name:"Ensalada Bogotana", time:"50", rating:"2.0"},
	{name:"Ensalada Caesar", time:"45", rating:"4.9"},
	{name:"Ensalada Bogotana", time:"50", rating:"2.0"}
];

const recipes = recipesData.map(recipeData => <Recipe {...recipeData} />);

const Recipes = () => ( 
  <div className={"container"}>
     <div className={'row justify-content-center m-6'}>
      {recipes}
    </div>
  </div>
);

export default Recipes;