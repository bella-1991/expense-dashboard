import { combineReducers } from 'redux';
import expensesReducer from './expensesReducer';

export default combineReducers({
    expensesReducer: expensesReducer
})
