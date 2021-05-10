import React from 'react';
import ReactDOM from 'react-dom';
import Login from "./Pages/Login";
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import  {Provider} from 'react-redux'
import loggedReducer from './Store/reducers/loggedReducer';

const rootReducer = combineReducers({
    loggedStore: loggedReducer,
})

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
