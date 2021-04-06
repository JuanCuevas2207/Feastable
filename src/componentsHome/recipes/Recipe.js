import recipeStyles from './Recipe.module.css';

const Recipe = (props) =>(
    <div className={[recipeStyles.recipe, 'py-3'].join(" ")} style={{backgroundImage: "url(assets/recipePics/"+props.image+")"}}>
        <h6 className={recipeStyles.time}>{props.time} min</h6>
        <h2 className={recipeStyles.recipeName}>{props.name}</h2>
        <h6 className={recipeStyles.rating}>{props.rating} stars</h6>
    </div>
  );

  export default Recipe;