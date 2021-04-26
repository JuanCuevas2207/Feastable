import recipeStyles from './Recipe.module.css';

const Recipe = (props) =>(
    <div className={recipeStyles.recipe} style={{backgroundImage: "url(assets/recipePics/"+props.image+")"}}>      
        <h6 className={recipeStyles.time}><img src="assets/icons/clock.png" height="20px" alt="Clock"></img> {props.time} min</h6>        
        <h2 className={recipeStyles.recipeName}>{props.name}</h2>
        <h6 className={recipeStyles.rating}>
        {props.rating < 1 ? <span className={recipeStyles.star}>☆</span> : <span className={recipeStyles.fullStar}>★</span>}
        {props.rating < 2 ? <span className={recipeStyles.star}>☆</span> : <span className={recipeStyles.fullStar}>★</span>}
        {props.rating < 3 ? <span className={recipeStyles.star}>☆</span> : <span className={recipeStyles.fullStar}>★</span>}
        {props.rating < 4 ? <span className={recipeStyles.star}>☆</span> : <span className={recipeStyles.fullStar}>★</span>}
        {props.rating < 5 ? <span className={recipeStyles.star}>☆</span> : <span className={recipeStyles.fullStar}>★</span>}
        </h6>
    </div>
);

export default Recipe;