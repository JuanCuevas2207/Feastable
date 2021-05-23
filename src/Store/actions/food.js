import * as actionTypes from "./actionTypes";
import databaseAxios from "../../Instances/database/databaseAxios";

const startFoodLoading = () => {
  return {
    type: actionTypes.START_FOOD_LOADING,
  };
};

const endFoodLoading = () => {
  return {
    type: actionTypes.END_FOOD_LOADING,
  };
};

const loadFood = (food) => {
    return {
      type: actionTypes.FETCH_FOOD,
      payload: {
        food: food,
      },
    };
};

  export const fetchFood = (onSuccessCallback) => {
    return (dispatch) => {
      dispatch(startFoodLoading());
      databaseAxios
        .get("/food.json")
        .then((response) => {
          const food = Object.values(response.data)
          dispatch(loadFood(food));
          dispatch(endFoodLoading());
          onSuccessCallback();
        })
        .catch((error) => {
          console.log(error);
          dispatch(endFoodLoading());
        });
    };
  };