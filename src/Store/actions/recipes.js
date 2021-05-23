import * as actionTypes from "./actionTypes";
import databaseAxios from "../../Instances/database/databaseAxios";

const startRecipesLoading = () => {
  return {
    type: actionTypes.START_RECIPES_LOADING,
  };
};

const endRecipesLoading = () => {
  return {
    type: actionTypes.END_RECIPES_LOADING,
  };
};

const loadRecipes = (recipes) => {
    return {
      type: actionTypes.FETCH_RECIPES,
      payload: {
        recipes: recipes,
      },
    };
};

  export const fetchRecipes = (onSuccessCallback) => {
    return (dispatch) => {
      dispatch(startRecipesLoading());
      databaseAxios
        .get("/recipes.json")
        .then((response) => {
          const recipes = Object.values(response.data)
          dispatch(loadRecipes(recipes));
          dispatch(endRecipesLoading());
          onSuccessCallback();
        })
        .catch((error) => {
          console.log(error);
          dispatch(endRecipesLoading());
        });
    };
  };