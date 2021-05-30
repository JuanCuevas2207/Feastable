import * as actionTypes from "../actions/actionTypes";
import updateObject from "../utility";

const initialState = {
  recipes: [],
  loadingRecipes: false,
};

const startLoading = (state, action) => {
  return updateObject(state, { loadingRecipes: true });
};

const endLoading = (state, action) => {
  return updateObject(state, { loadingRecipes: false });
};

const fetchRecipes = (state, action) => {
  return updateObject(state, { recipes: action.payload.recipes });
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RECIPES:
      return fetchRecipes(state, action);
    case actionTypes.START_RECIPES_LOADING:
      return startLoading(state, action);
    case actionTypes.END_RECIPES_LOADING:
      return endLoading(state, action);
    default:
      return state;
  }
};

export default recipesReducer;
