import { createStore, combineReducers ,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'//passing dispatch to function...third party library to import first..check for this fact
import authReducer from '../Reducer/auth'
import PostReducer from '../Reducer/Post'
const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//developer tool for react...error occuring check it

export default ()=>{ // There can be only one default export.

    const store = createStore(
        combineReducers({
          auth:authReducer,//also check that ihese property auth: can be removed or not
          Post:PostReducer
        }),

        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//we were using before compose
      );
      return store;
}