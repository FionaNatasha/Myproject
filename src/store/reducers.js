import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import login from "./login.reducer";
import mongodb from "./mongodb";
import typeOfTurs from './tur.js'


const rootRedusers=combineReducers({
   login,
   mongodb,
   typeOfTurs
})

const store = createStore(rootRedusers, applyMiddleware(thunk))
export default store