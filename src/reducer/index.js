import { combineReducers } from 'redux'
import nav from './nav.js'
import home from './home.js'
const AppReducer = combineReducers({
  nav,
  home
})

export default AppReducer