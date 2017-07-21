import mathReducer from './mathReducer'
import userReducer from './userReducer'
import {combineReducers} from 'redux'


export default combineReducers({
    mathReducer,
    userReducer
})