import React from 'react';
import ReactDOM from 'react-dom';
import Login from "./Pages/Login";
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import  {Provider} from 'react-redux'
import loggedReducer from './Store/reducers/loggedReducer';
import thunk from 'redux-thunk'
import signUpErrorReducer from './Store/reducers/signUpErrorReducer';
import signInErrorReducer from './Store/reducers/signInErrorReducer';
import recipesReducer from './Store/reducers/recipesReducer';
import foodReducer from './Store/reducers/foodReducer';

const rootReducer = combineReducers({
    loggedStore: loggedReducer,
    signUpErrorStore: signUpErrorReducer,
    signInErrorStore: signInErrorReducer,
    recipesStore: recipesReducer,
    foodStore: foodReducer,
})
  
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
