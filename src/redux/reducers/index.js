import { combineReducers } from 'redux';
import { productsReducer, cartReducer, selectedProductReducer } from './AppReducer';

const reducers = combineReducers({
    allProducts: productsReducer,
    product: selectedProductReducer,
    cartProducts: cartReducer,
})

export default reducers;