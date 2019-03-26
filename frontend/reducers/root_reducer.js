import {combineReducers} from 'react-redux';
import entitiesReducer from './entitiesReducer'; 

export default combineReducers({entities: entitiesReducer});