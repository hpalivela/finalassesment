import {applyMiddleware, createStore} from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import countReducer from './countReducer';



const rootReducer = combineReducers({
    counter: countReducer
    
})

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;