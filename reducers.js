import { combineReducers } from 'redux'
//import { } from './actions'

const content = (state = {}, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const rootReducer = combineReducers({
    content
})

export default rootReducer
