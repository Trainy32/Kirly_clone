import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from "history";

// 리듀서
import user from './modules/user'
import cart from './modules/cart'
import comment from './modules/comment'
import products from './modules/products'

const middlewares = [thunk]
const rootReducer = combineReducers({ user, cart, comment, products });
const enhancer = applyMiddleware(...middlewares)


const store = createStore(rootReducer, enhancer);


// history를 페이지에서 편하게 사용할 수 있도록 준비
export const history = createBrowserHistory();

export default store;