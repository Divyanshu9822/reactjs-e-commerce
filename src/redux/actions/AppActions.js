import  ActionTypes  from '../constants/ActionTypes';

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
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
export const incrementItemCount = (product) => {
    return {
        type: ActionTypes.ADD_ONE,
        payload: product,
    }
}
export const decrementItemCount = (product) => {
    return {
        type: ActionTypes.SUB_ONE,
        payload: product,
    }
}

export const totalAmountCart = () => {
    return{
        type: ActionTypes.CART_TOTAL,
    }
}