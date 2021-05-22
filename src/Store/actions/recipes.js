import * as actionTypes from "./actionTypes";
import databaseAxios from "../../Instances/database/databaseAxios";


const loadRecipes = (recipes) => {
    return {
      type: actionTypes.FETCH_RECIPES,
      payload: {
        recipes: recipes,
      },
    };
};

export const fetchRecipes = () => {
    return (dispatch) => {
      databaseAxios
        .get("/recipes.json")
        .then((response) => {
          console.log(response);
          const recipes = Object.values(response.data)
          dispatch(loadRecipes(recipes));
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };