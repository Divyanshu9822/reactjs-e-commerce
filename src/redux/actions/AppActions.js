import  ActionTypes  from '../constants/ActionTypes';

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}
export const selectCategory = (products) => {
    return {
        type: ActionTypes.SELECTED_CATEGORY,
        payload: products,
    }
}
export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}
export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}

export const addToCart = (product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: product,
    }
}
export const removeFromCart = (product) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: product,
    }
}
export const incrementItemCount = (id) => {
    return {
        type: ActionTypes.ADD_ONE,
        payload: id,
    }
}
export const decrementItemCount = (id) => {
    return {
        type: ActionTypes.SUB_ONE,
        payload: id,
    }
}