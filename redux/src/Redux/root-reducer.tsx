// arquivo para chamar reduces que ira ter no app
// combine reducers
import { combineReducers } from 'redux'

// import my slice
import userSlice  from './User/slice'

const combine = combineReducers({
    user:userSlice
})

export default combine