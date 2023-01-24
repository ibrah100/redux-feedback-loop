import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';


import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feeling = (state = 0, action) => {
    if (action.type === 'ADD_FEELING'){
        return Number(action.payload);
    } 
    
    return state
}

const understanding = (state = 0, action) => {
    if (action.type === 'ADD_UNDERSTANDING'){
        return Number(action.payload);
    } 
    
    return state
}

const support = (state = 0, action) => {
    if (action.type === 'ADD_SUPPORT'){
        return Number(action.payload);
    } 
    
    return state
}

const comment = (state = '', action) => {
    if (action.type === 'ADD_COMMENT'){
        return action.payload;
    } 
    
    return state
}

const feedbackObject = (state = [], action) => {
    if (action.type === 'SET_FEEDBACK_OBJECT') {
        return action.payload;
    }
    return state;
}



const reduxStore = createStore(combineReducers ({
    //reducers go here
    feeling,
    understanding,
    support,
    comment,
    feedbackObject,
}), applyMiddleware(logger));

ReactDOM.render(
<React.StrictMode>
    <Provider store={reduxStore}>
        <App />, 
    </Provider>
</React.StrictMode>
,document.getElementById('root'));
registerServiceWorker();
