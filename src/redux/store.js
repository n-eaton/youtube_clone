import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {authReducer} from './reducers/auth.reducer'
import thunk from 'redux-thunk'
import {homeVideoReducer } from './reducers/videos.reducer'



const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos:homeVideoReducer,
})

const store = createStore (rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))

export default store