import { combineReducers,createStore } from 'redux'
import count from './count.js'
const reducer =  combineReducers({
  count
})

export const store = createStore(reducer);
// export default createStore(reducer);