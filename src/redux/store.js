import { createStore, applyMiddleware, compose } from 'redux'
import userReducer from './user/userReducer'
import thunkMiddleware from 'redux-thunk'

let store = createStore(
  userReducer,
  compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

store.subscribe( () => console.log('SOMETHING HAPPENED ON THE REDUX STORE', store.getState() ));

export default store;