import * as actionTypes from "./actionTypes";
import authenticationAxios from '../../Instances/authentication/authenticationAxios'

const API_KEY = "AIzaSyA5YYtCBR662zLJ7HWTBGcdvVGih3tyQi8";

const saveSession = (userName, token, localId) => {
    return {
      type: actionTypes.SIGN_IN,
      payload: {
        userName: userName,
        idToken: token,
        localId: localId,
      },
    };
};

const startAuthLoading = () => {
    return {
      type: actionTypes.START_AUTH_LOADING,
    };
  };
  
  const endAuthLoading = () => {
    return {
      type: actionTypes.END_AUTH_LOADING,
    };
  };

export const signUp = (authData, isMatch, onSuccessCallback)=>{
    return(dispatch)=>{
        if(isMatch){
            dispatch(startAuthLoading())
            authenticationAxios
            .post("accounts:signUp?key=" + API_KEY, authData)
            .then((response)=>{
                dispatch(endAuthLoading())
                onSuccessCallback();
            })
            .catch((error)=>{
                dispatch(endAuthLoading())
                switch(error.response.data.error.message){
                    case "INVALID_EMAIL":
                        dispatch({type: actionTypes.INVALID_EMAIL})
                        break;
                    case "WEAK_PASSWORD : Password should be at least 6 characters":
                        dispatch({type: actionTypes.INVALID_PASSWORD})
                        break;
                    case "MISSING_PASSWORD":
                        dispatch({type: actionTypes.MISSING_PASSWORD})
                        break;
                    case "MISSING_EMAIL":
                        dispatch({type: actionTypes.MISSING_EMAIL})
                        break;
                    case "EMAIL_EXISTS":
                        dispatch({type: actionTypes.EMAIL_EXISTS})
                        break;
                    default:
                        console.log(error.response.data.error.message)
                }
            })
        }else{
            dispatch({type: actionTypes.PASSWORDS_NOT_MATCH})
        }
        
    }
}

export const signIn = (authData, onSuccessCallback)=>{
    return(dispatch)=>{
        dispatch(startAuthLoading())
        authenticationAxios
            .post("accounts:signInWithPassword?key=" + API_KEY, authData)
            .then((response)=>{
                const userEmail = authData.email;
                const token = response.data.idToken;
                const localId = response.data.localId;
                let userSession = {
                    token,
                    userEmail,
                    localId,
                };

                userSession = JSON.stringify(userSession);

                localStorage.setItem("userSession", userSession);

                dispatch(saveSession(userEmail, token, localId));
                dispatch(endAuthLoading())
                onSuccessCallback();      
            })
            .catch((error)=>{
                console.log(error)
                dispatch(endAuthLoading())
                dispatch({type: actionTypes.WRONG_CREDENTIALS})

            })
    }
}

export const persistAuthentication = () => {
    return (dispatch) => {
      let userSession = localStorage.getItem("userSession");
  
      if (!userSession) {
        dispatch(logOut());
      } else {
        userSession = JSON.parse(userSession);
  
        dispatch(
          saveSession(
            userSession.userEmail,
            userSession.token,
            userSession.localId
          )
        );
      }
    };
};

export const logOut = () => {
    localStorage.setItem("userSession", "");
    return {
        type: actionTypes.LOG_OUT,
    };
};
