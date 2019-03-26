
import { createStore } from 'react-redux'; 
import thunk from 'redux-thunk'; 
import {applyMiddleWare} from 'react-redux'; 
import RootReducer from './reducers/root_reducer'

const configureStore = (preloadedState = {}) =>(
    createStore(RootReducer, preloadedState, applyMiddleWare(thunk))
)