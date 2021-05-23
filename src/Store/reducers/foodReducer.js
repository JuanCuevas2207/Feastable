import * as actionTypes from "../actions/actionTypes";
import updateObject from "../utility";

const initialState = {
  food: [],
  loadingFood: false,
};

const startLoading = (state, action) => {
  return updateObject(state, { loadingFood: true });
};

const endLoading = (state, action) => {
  return updateObject(state, { loadingFood: false });
};

const fetchFood = (state, action) => {
  return updateObject(state, { food: action.payload.food });
};


const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FOOD:
      return fetchFood(state, action);
    case actionTypes.START_FOOD_LOADING:
      return startLoading(state, action);
    case actionTypes.END_FOOD_LOADING:
      return endLoading(state, action);
    default:
      return state;
  }
};

export default foodReducer;
