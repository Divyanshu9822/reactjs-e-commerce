import { combineReducers } from 'redux';
import { productsReducer, categoryReducer, cartReducer, selectedProductReducer, itemCountReducer } from './AppReducer';

const reducers = combineReducers({
    allProducts: productsReducer,
    selectedCategory: categoryReducer,
    product: selectedProductReducer,
    itemCount: itemCountReducer,
    cartProducts: cartReducer,
})

export default reducers;