import { combineReducers, applyMiddleware, createStore, compose } from "redux"
import thunk from "redux-thunk"
import loginReducer from "./login/reducer.js"

const reducer = combineReducers({ login: loginReducer })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export {store}