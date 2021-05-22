import * as actionTypes from '../actions/actionTypes'

//INITIAL STATE
const inicialState = {
    message: "",
}

const signUpErrorReducer = (state=inicialState, action)=>{
    switch(action.type){
        case actionTypes.INVALID_EMAIL:
            return{
                message: "El correo ingresado no es válido"
            }

        case actionTypes.INVALID_PASSWORD:
            return{
                message: "La contraseña debe tener mas de 6 caracteres"
        }
        case actionTypes.MISSING_PASSWORD:
            return{
                message: "Debe ingresar una contraseña válida"
        }
        case actionTypes.MISSING_EMAIL:
            return{
                message: "Debe ingresar un correo válido"
        }
        case actionTypes.PASSWORDS_NOT_MATCH:
            return{
                message: "Las contraseñas no coinciden"
        }
        default:
            return{
                message: ""
            }
    }
}

export default signUpErrorReducer;