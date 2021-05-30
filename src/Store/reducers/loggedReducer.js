import * as actionTypes from '../../Store/actions/actionTypes'
import updateObject from "../utility";

//INITIAL STATE
const inicialState = {
    isUserLoggedIn: false,
    userLoggedIn: {
        userName: "",
        idToken: "",
        localId: "",
    },
    loadingAuth: false,
}

const login = (state, action) => {
    return updateObject(state, {
      isUserLoggedIn: true,
      userLoggedIn: {
        userName: action.payload.userName,
        idToken: action.payload.idToken,
        localId: action.payload.localId,
      },
    });
};
  
const signUp = (state, action) => {
    return updateObject(state, {
      isUserLoggedIn: true,
      userLoggedIn: {
        userName: action.payload.userName,
        idToken: action.payload.idToken,
        localId: action.payload.localId,
      },
    });
};

const logOut = (state, action) => {
    return updateObject(state, {
      isUserLoggedIn: false,
      userLoggedIn: {
        userName: "",
        idToken: "",
        localId: "",
      },
    });
};

const startLoading = (state, action) => {
  return updateObject(state, { loadingAuth: true });
};

const endLoading = (state, action) => {
  return updateObject(state, { loadingAuth: false });
};

const loggedReducer = (state=inicialState, action)=>{
    switch(action.type){
        case actionTypes.SIGN_IN:
            return login(state, action);
        case actionTypes.SIGN_UP:
            return signUp(state, action);
        case actionTypes.LOG_OUT:
            return logOut(state, action);
        case actionTypes.START_AUTH_LOADING:
            return startLoading(state, action);
        case actionTypes.END_AUTH_LOADING:
            return endLoading(state, action);
        default:
            return state;
    }
}

export default loggedReducer;