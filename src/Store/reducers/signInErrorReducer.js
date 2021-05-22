import * as actionTypes from '../actions/actionTypes'

//INITIAL STATE
const inicialState = {
    message: "",
}

const signInErrorReducer = (state=inicialState, action)=>{
    switch(action.type){
        case actionTypes.WRONG_CREDENTIALS:
            return{
                message: "Las credenciales ingresadas no son válidas"
        }
        default:
            return{
                message: ""
            }
    }
}

export default signInErrorReducer;