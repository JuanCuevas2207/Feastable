import * as actionTypes from "./actionTypes";
import authenticationAxios from '../../Instances/authentication/authenticationAxios'

const API_KEY = "AIzaSyA5YYtCBR662zLJ7HWTBGcdvVGih3tyQi8";

export const signUp = (authData, isMatch)=>{
    return(dispatch)=>{
        if(isMatch){
            authenticationAxios
            .post("accounts:signUp?key=" + API_KEY, authData)
            .then((response)=>{
                console.log(response)
            })
            .catch((error)=>{
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
        authenticationAxios
            .post("accounts:signInWithPassword?key=" + API_KEY, authData)
            .then((response)=>{
                dispatch({type: actionTypes.SIGN_IN})
                onSuccessCallback();
                console.log(response)         
            })
            .catch((error)=>{
                dispatch({type: actionTypes.WRONG_CREDENTIALS})
            })
    }
}
