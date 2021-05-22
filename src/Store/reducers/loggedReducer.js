import * as actionTypes from '../../Store/actions/actionTypes'

//INITIAL STATE
const inicialState = {
    isLogged: false,
}

const loggedReducer = (state=inicialState, action)=>{
    switch(action.type){
        case actionTypes.SIGN_IN:
            return{
                isLogged: true
            }

        case actionTypes.LOG_OUT:
            return{
                isLogged: false
        }
        default:
            return state
    }
}

export default loggedReducer;