import  App  from './containers/App'
import {render} from "react-dom";
import React from 'react'
import {
    createStore,
    applyMiddleware
} from 'redux'
import logger from 'redux-logger'
import {Provider} from "react-redux"
import allReducers from './Reducers/combineReducers'
import thunk  from 'redux-thunk'
import promise from 'redux-promise-middleware'
// my custom middleware 

const myLogger = (store) => (next) => (action)=>{
    console.log("Logger Action:", action)
    next(action)
} 
// create store hold up all object in application 
const store = createStore(allReducers, {}, applyMiddleware(logger, thunk, promise()))



store.subscribe(() => {
    console.log("Store updated", store.getState())
})

// store.dispatch({
//     type: 'ADD',
//     payload: 100
// })

// store.dispatch({
//     type: 'SUBTRACT',
//     payload: 10
// })


// store.dispatch({
//     type: 'ADD',
//     payload: 5
// })


render( 
<Provider store={store}>
     <App />
</Provider>, window.document.getElementById('app'));
