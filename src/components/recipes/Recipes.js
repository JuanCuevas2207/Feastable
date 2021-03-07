var Recipe = (props) =>{
  return (
    <div className="recipe row py-3 justify-content-center">
      <h6 className="time">{props.time} min</h6>
      <h2 className="recipeName">{props.name}</h2>
      <h6 className="rating">{props.rating} stars</h6>
    </div>
  );
}

const recipesData = [
	{name:"Ensalada Marroqui", time:"25", rating:"3.5"},
	{name:"Ensalada Mexicana", time:"60", rating:"4.0"},
	{name:"Ensalada Caesar", time:"45", rating:"4.9"},
	{name:"Ensalada Bogotana", time:"50", rating:"2.0"},
	{name:"Ensalada Caesar", time:"45", rating:"4.9"},
	{name:"Ensalada Bogotana", time:"50", rating:"2.0"}
];

const recipes = recipesData.map(recipeData => <Recipe {...recipeData} />);

var Recipes = () => ( 
  <div className="recipes">
    {recipes}
  </div>
);

export default Recipes;