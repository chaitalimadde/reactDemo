import saveData from './saveData';
import {combineReducers} from 'redux';
import postReducer from './postReducer';

const rootReducer = combineReducers({
    saveData,
    postReducer
})

export default rootReducer;