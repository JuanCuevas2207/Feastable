import * as actionTypes from "./actionTypes";
import databaseAxios from "../../Instances/database/databaseAxios";


const loadFood = (food) => {
    return {
      type: actionTypes.FETCH_FOOD,
      payload: {
        food: food,
      },
    };
};

export const fetchFood = () => {
    return (dispatch) => {
      databaseAxios
        .get("/food.json")
        .then((response) => {
          console.log(response);
          const food = Object.values(response.data).map((individualFood) => {
            return { ...individualFood };
          });
  
          dispatch(loadFood(food));
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };