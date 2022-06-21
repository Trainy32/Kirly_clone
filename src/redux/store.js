import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// 리듀서
import user from './modules/user'
import cart from './modules/cart'
import comment from './modules/comment'
import products from './modules/products'


const middlewares = [thunk]
const rootReducer = combineReducers({ user, cart, comment, products });
const enhancer = applyMiddleware(...middlewares)


const store = createStore(rootReducer, enhancer);


export default store;