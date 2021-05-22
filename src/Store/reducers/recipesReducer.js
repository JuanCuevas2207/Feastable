import * as actionTypes from "../actions/actionTypes";
import updateObject from "../utility";

const initialState = {
  recipes: [],
};

const fetchRecipes = (state, action) => {
  return updateObject(state, { recipes: action.payload.recipes });
};


const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RECIPES:
      return fetchRecipes(state, action);
    default:
      return state;
  }
};

export default recipesReducer;
